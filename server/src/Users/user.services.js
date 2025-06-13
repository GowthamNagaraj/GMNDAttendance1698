require("dotenv").config();
const {userModal,ObjectId} = require("./users.modal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    registerUser,
    loginUser
}

// register
async function registerUser(params) {
    try {
        const {username,email,password} = params;
        // exiting email check
        const existEmail = await userModal.findOne({email:email});
        if(existEmail) return {status:400,message:"Email already exist"};

        // hashpassword
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create user
        const user = new userModal({
            username:username,
            email:email,
            password:hashPassword
        });
        // save()
        const result = await user.save();
        return {status:201,message:"User created successfully",result:result};
    } catch (error) {
        return {status:500,message:error.message};
    }
}

// login
async function loginUser(params) {
    try {
        const {email,password} = params;
        // console.log(email);
        
        // find user
        const user = await userModal.findOne({email:email});
        // console.log(user);
        
        if(!user) return {status:404,message:"User not found"};
        // compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return {status:401,message:"Invalid password"};
        // generate token
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:60*60*24*7}); // 7 day
        return {status:200,message:"Login successful",token:token, user:user};
    } catch (error) {
        return {status:500,message:error.message};
    }
}