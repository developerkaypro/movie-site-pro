const mongoose=require("mongoose");

async function connectDB(){
  try{
 await mongoose.connect(process.env.MONGO_URL)
console.log("connected to Mongo db dear")
 }
  catch(error){
   console.log(error)
}

}

module.exports=connectDB;
