const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    hash_password: {
        type: String,
        require: true,
    },
    displayName: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 32,
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    country: {
        type: String,
        enum: ["India", "Turkey", "USA", "UK", "UAE"],
    },
    profilePicture: {
        type: String,
    },
}, { timestamps: true });
//For get fullName from when we get data from database
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});
userSchema.method({
    async authenticate(password) {
        return bcrypt.compare(password, this.hash_password);
    },
});
module.exports = mongoose.model("User", userSchema);