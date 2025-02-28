const userModel=require("../models/UserModel")
const bcrypt=require("bcryptjs")

async function userSignupController(req,res){
  try{
  const {email,password,name,profilePic}=req.body
    const user=await userModel.findOne({email})

   if(user){
  throw new Error("user already exists")
 }
  if(!email){
 throw new Error("please provide email")

  }

if(!password){
 throw new Error("please provide password")
}

 if(!name){
  throw new Error("please provide name")
 }
const salt=bcrypt.genSaltSync(10);
 const hashedPassword=await bcrypt.hashSync(password,salt)
 if(!hashedPassword){
   throw new Error("something is wrong")
}

const payload={
 ...req.body,
 password:hashedPassword
 
}

const userData=new  userModel(payload)
const saveUser=await userData.save()
console.log(saveUser)
res.status(201).json({
  data:saveUser,
  success:true,
  error:false,
  message:"user created successfully!"
})


}
  catch(err){
   res.json({
     message:err.message||err,
     error:true,
     success:false,
 
   })
 }



}

module.exports=userSignupController;
