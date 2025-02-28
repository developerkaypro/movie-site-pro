const express=require("express")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const connectDB=require("./config/db")
const bodyParser=require("body-parser");
const router=require("./routes/routes")
require("dotenv").config()

const app=express()

app.use(cors(
{
  origin:process.env.FRONTEND_URL,
  credentials:true 
}
))
app.use(express.json({limit:"100mb"}))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '100mb' }));
 // Increase limit for JSON
app.use(bodyParser.urlencoded({
 limit: '50mb', extended: true }));
 // Increase limit for URL-encoded

app.use("/api",router)
app.get("/cookie",(req,res)=>{
   console.log("cookies",req.cookies)

  console.log("signed cookies",req.signedCookies)
  })
const PORT=8080 || process.env.PORT
 connectDB().then(()=>{
  app.listen(PORT,()=>{
  console.log("server is running on port",PORT )
})

})

