const userModel=require("../models/UserModel")
async function userDetailsController(req,res){
     try{
     const user=await userModel.findById(req.user_id)


    res.status(200).json({
     data:user,
     error:false,
     success:true,
     message:"user details"
    })
  }
     catch(err){
     res.status(400).json({
     message:err.message || err,
    error:true,
   success:false


  })
   }

}

module.exports=userDetailsController;
