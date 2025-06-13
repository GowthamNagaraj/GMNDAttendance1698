const userServices = require("./user.services");

module.exports = {
    register,
    login
}

async function register(req,res,next) {
    try {
        const user = await userServices.registerUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function login(req,res,next) {
    try {
        const token = await userServices.loginUser(req.body);
        res.cookie('token',token,{maxAge: 900000, httpOnly: true});
        return res.status(token.status).json({ message: token.message, token: token.token, data: token.user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
