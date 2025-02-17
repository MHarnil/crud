// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     contact: {
//         type: String,
//         required: true,
//     },
//     dob: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// });

// const UserModel = mongoose.model('User', UserSchema);
// module.exports = UserModel;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    dob: { type: Date, required: true },
    password: { type: String, required: true }
});



const User = mongoose.model('User', userSchema);
module.exports = User