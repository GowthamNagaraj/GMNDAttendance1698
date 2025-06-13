require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./src/database/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({
    origin: "*",
    "exposedHeaders": ['Content-Dispositon','Access-Controll-Allow-Origin']
}));
app.use(cookieParser())

// connect db
db.connectDb();

// api
app.use("/GMND/api/users", require("./src/routes/users.routes"));
app.use("/GMND/api/attendance", require("./src/routes/attendance.routes"));

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});