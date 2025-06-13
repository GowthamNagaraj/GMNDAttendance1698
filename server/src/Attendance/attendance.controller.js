const attendanceService = require("./attendance.service");

module.exports = {
    saveAttendance,
    getRecord
}

// Attendance Service
async function saveAttendance(req,res,next) {
    try {
        console.log(req.body);
        
        const attendance = await attendanceService.insertAttendance(req.body);
        return res.json(attendance);
    } catch (error) {
        return res.status(500).json({ message: "Error saving attendance" });
    }
}

async function getRecord(req,res,next) {
    try {
        const record = await attendanceService.retriveDatas(req.params.id);
        return res.json(record);
    } catch (error) {
        return res.status(500).json({ message: "Error getting record" });
    }
}