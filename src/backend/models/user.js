import mongoose from "mongoose";

const userProfile = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String},
    age: {type: Number},
    city: {type: String},
    photo: {type: String}
})
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    profile: userProfile
})


export default mongoose.model("User",userSchema)