const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have an Author"],
        unique: [true, "You acn only have one Author of that name"],
        trim: true,
        maxlength: [50, "Your name is too long"],
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address",
        ]
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    },
});

module.exports= mongoose.model("Author",authorsSchema );