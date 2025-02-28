const jwt=require("jsonwebtoken")

async function authToken(req,res,next){
  try{
  const Token=req.cookies?.token
    console.log("token",Token)
  if(!Token){
    return res.json({
    message:"user not login",
    error:true,
   sucess:false

})
   }

jwt.verify(Token,process.env.TOKEN_SECRET_KEY,
  function(err,decoded){
   
   console.log("decoded",decoded)

   if(err){
      console.log("err auth",err)
    }
   
    req.user_id=decoded?._id
   console.log(req.user_id)
   next()

   
   })
}
 catch(err){
  res.status(400).json({
    message:err.message || err,
   data:[],
   error:true,
  success:false

  })

 }


}

module.exports=authToken;
