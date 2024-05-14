const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "Por favor teclea tu contraseña"],
        minlength: [6, "La contraseña debe tener al menos 6 caracteres"]
    },
    signo: {
        type: String,
        required: [true, "Por favor teclea tu signo Zodiacal"] 
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timeStamps: true 
})
module.exports = mongoose.model('User', userSchema);
