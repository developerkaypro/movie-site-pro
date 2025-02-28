
const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
  name:String,
  email:{
  type:String,
  unique:true,
  required:true,
 
  },
 password:String, 
 profilePic:{
 type:String,
 default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNVU3_-plmJMSWx2FWla6KeaeXo17G6EJGWt4vbrXHa0zLaVrwcL2gyE&s"},
},{timestamps:true})
const UserModel=mongoose.model("user",newSchema)
module.exports=UserModel;
