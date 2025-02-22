const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({
                message: 'User not found',
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).send({
                message: 'Invalid password',
            });
        }

        return res.status(200).send({
            message: 'Successfully logged',
        });
    } catch (error) {
        return res.status(500).send({
            message: 'An error occurred while processing the request.',
            error: error.message,
        });
    }
});


authRouter.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});

authRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

authRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

authRouter.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = authRouter;