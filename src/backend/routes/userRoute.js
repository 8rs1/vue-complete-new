import express from 'express';
import User from '../models/user.js';

const router = express.Router();


// get all users
router.get("/", async (req,res)=> {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//get special user by username & password
router.post("/finduser", async (req,res)=> {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username,password})
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({message: "User not found" })
        }
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// add a user
router.post("/", async (req,res)=> {
    const {username,password,profile} = req.body
    const user = new User({username,password,profile})
    try {
        const newUser = await user.save();
        res.status(200).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


export default router;