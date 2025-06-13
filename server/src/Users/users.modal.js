const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

// modal

const userSchema = new Schema({
    username: { type: String,required: true },
    email: { type: String,required: true, unique: true },
    password: { type: String,required: true, minlength: 8 },
})

const userModal = mongoose.model("users", userSchema);

module.exports = {
    userModal,
    ObjectId
}