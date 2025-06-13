const express = require("express");
const router = express.Router();
const attendanceController = require("../Attendance/attendance.controller");
const auth = require("../middleware/auth");

router.post("/", attendanceController.saveAttendance);
router.post("/:id", auth, attendanceController.getRecord);

module.exports = router