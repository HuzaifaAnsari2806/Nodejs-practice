const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practice-mongo")
    .then(() => console.log("MongoDB Conected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = {
    User
};