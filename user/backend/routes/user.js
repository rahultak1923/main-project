const { Router } = require("express");
const User = require('../models/user');
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");



const router = Router();
const JWT_SECRET = 'rahulisagoodB$oy';

router.get('/',async(req,res)=>{
    const user = await User.find({})
    const Json = {
user
    }
    return res.json(Json)
})

router.get('/:id',async(req,res)=>{
    const userid = req.params.id;
    const user = await User.findById(userid);
    return res.json({user})
})

router.post("/signup", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check missing fields
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Creating hashed password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      fullname,
      email,
      password: secPass,
    });

    // JWT Token
    const data = {
      user: { id: newUser._id },
    };

    const authToken = jwt.sign(data, JWT_SECRET);

    return res.json({ authToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to create user",
      details: error.message,
    });
  }
});

router.post("/login",[
    body('password',"password cannot be blank").exists(),
    body("email","enter a valid email").isEmail(),
], async(req,res)=>{
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }
        const{email, password} = req.body;
        try{
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({error:"please try to login with correct credentials"})
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({error:"please try to login with correct credentials password is wrong"})
            }
            const data = {
                user:{
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({authToken})
        }catch(error){
            console.error("error creating user",error)
            return res.status(500).json({error:"internal server error"})
        }
    }catch(error){
            console.error("error creating user",error)
            return res.status(500).json({error:"internal server error"})
        }
})


router.delete("/delete/:id", async (req, res) => {
    try {
      const userid = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userid);
      
      return res.json({ message: "User delete", user: deletedUser });
    } catch (error) {
      return res.status(500).json({ error: "failed to delete user" });
    }
  })


  router.put("/update/:id", async (req, res) => {
    try {
        const userid = req.params.id;
        const { fullName, email, password } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(userid, {
            fullName,
            email,
            password
        }, { new: true }); // Returns the updated document
        
        return res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update user" });
    }
});

module.exports = router;