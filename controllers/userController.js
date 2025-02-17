const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, contact, dob, password } = req.body;
        console.log(req.body,"ddddddddddddddddddddddddddddddddddd");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            contact,
            dob,
            password: hashedPassword
        });

        await newUser.save();
        return res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { firstName, lastName, email, contact, dob, password } = req.body;

        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.contact = contact || user.contact;
        user.dob = dob || user.dob;

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};
