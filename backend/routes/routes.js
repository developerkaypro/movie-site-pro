const express=require("express");
const cookieParser = require('cookie-parser');
const userSignUpController=require("../controller/userSignup")
const userSignInController=require("../controller/userSignin")
const userDetailsController=require("../controller/userDetails")
const userLogout=require("../controller/userLogout")
const authToken=require("../middleware/authToken")
const router=express.Router()
router.use(cookieParser())
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.get("/get",(req,res)=>res.send("wow"))
module.exports=router

