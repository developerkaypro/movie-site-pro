const bcrypt=require("bcryptjs");
const dotenv=require("dotenv")
const jwt=require("jsonwebtoken")
dotenv.config()
const userModel=require("../models/UserModel")

async function userSignUpController(req,res){
   try{
  const {email,password}=req.body;
  if(!email){
  throw new Error("please provide email")
    }

 if(!password){
  throw new Error("please provide password")

  }
const user=await userModel.findOne({email})

if(!user){
 throw new Error("User not found")
 }

const checkPassword=await bcrypt.compare(password,user.password)
if(checkPassword){

  const tokenData={
   _id:user._id,
  email:user.email
  }
 const tokenOption={
     httpOnly:true,
    secure:true
   }
  const token=await jwt.sign(
  tokenData,
  process.env.TOKEN_SECRET_KEY,
{expiresIn:60*60}   
  
)
 
res.cookie("token",token,tokenOption).json({
   message:"Login succesfully",
   data:user,
   success:true,
  error:false
})


 }

console.log(checkPassword)
   }

 catch(err){

   res.json({
    message:err.message || err,
    error:true,
    success:false

   })
}


}
module.exports=userSignUpController;
