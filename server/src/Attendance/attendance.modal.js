const mongoose = require("mongoose");
const { Schema } = mongoose;
// const ObjectId = Schema.ObjectId;
const { ObjectId } = require('mongoose').Types;

// modal
const attendanceSchema = new Schema({
    userid: { type: ObjectId, ref: 'users' },
    present: { type: Number, required: true },
    absent: { type: Number, required: true },
    weekend: { type: Number, required: true },
    reason: { type: String },
    dateandtime: { type: String, required: true },
    month: { type: String, required: true },
    createdat: { type: Date, default: Date.now },
    updatedat: { type: Date, default: Date.now }
})

const attendanceModal = mongoose.model("attendance", attendanceSchema);

module.exports = {
    attendanceModal,
    ObjectId
}