import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true
    },
    phone: {
        type: Number, 
        required: true,
        min: 1000000000,
        max: 9999999999,
    },
    // Date : {
    //     type: Date,
    //     default: Date.now() + 1.98e+7
    // }
});

const User = mongoose.model('user', userSchema);
export default User;