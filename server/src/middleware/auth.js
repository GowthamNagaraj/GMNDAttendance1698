const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract Bearer token
    
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // decoded = { id: xxx, email: xxx } or whatever you signed
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(400).json({ msg: "Invalid token" });
  }
};


























// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// module.exports = function(req,res,next){
//     const token = req.cookies.token;
//     console.log("token: ", token);
    
//     if(!token) return res.status(401).json({msg: "No token, authorization"})
//     try {
//         console.log("***************************");
        
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(400).json({msg: "Invalid token"})
//     }
// }