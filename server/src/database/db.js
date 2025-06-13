const mongoose = require("mongoose")

async function connectDb(){
    try {
        return await mongoose.connect("mongodb+srv://naadi:OckWS0dk7k53C0CP@cluster0.xfqze4k.mongodb.net/empattendance?retryWrites=true&w=majority").then(()=>{
            console.log("Connected to MongoDB")
        }).catch((err)=>{
            console.log("Error connecting to MongoDB"+err)
        })
    } catch (error) {
        console.log("Something went wrong"+error);
    }
}

module.exports = {
    connectDb
}