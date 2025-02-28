import {FaEye} from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64.js";
import {FaEyeSlash} from "react-icons/fa";
import {toast} from "react-toastify";
import {useState} from "react";
import summaryApi from "../common/index"
const SignUp=()=>{
const [showPassword,setShowPassword]=useState(false)
const [showConfirmPassword,setShowConfirmPassword]=useState(false) 
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("")
const [name,setName]=useState("")
const navigate=useNavigate();
const [profilePic,setProfilePic]=useState("")
const handleSubmit=async (e)=>{
  e.preventDefault();
 const data={
      email,
      password,
     name,
    confirmPassword,
   profilePic,
  }
  if(password===confirmPassword){
  const dataResponse=await fetch(summaryApi.signUp.url,{
     method:summaryApi.signUp.method,
     headers:{

        "content-type":"application/json"
  },
  body:JSON.stringify(data)
    })
  const dataApi=await dataResponse.json();
  if(dataApi.success){
    
  toast.success(dataApi.message)
  navigate("/login")
  }
  if(dataApi.error){
   toast.error(dataApi.message)
 }
  console.log("data",dataApi)
}else{
 console.log("please check and confirm password");
}
}
const handleUploadPic=async (e)=>{
   const file=e.target.files[0]
   const imagePic=await imageTobase64(file)
    console.log(imagePic)
    setProfilePic(imagePic)
 }
return (
  <>

 <section id="signup">
 <div className="mx-auto container px-4">
  <div className="bg-white-600 p-2 w-full max-w-sm mx-auto">
  <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
      <div>{!profilePic?(
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06G1aDQ2I-QC5CQbAj0L9DH8TebqQt9ykxw&usqp=CAU"} alt="signup icon"/>
     ):<img src={profilePic} alt="your profile pic"/> } 
     </div>
     <form onSubmit={(e)=>e.preventDefault()}>
     <label>
    
     <div className="text-xs bg-opacity-80 bg-slate-200 py-4 text-center absolute bottom-0 w-full">
      uploadPhoto
     </div>
      <input type="file" onChange={handleUploadPic} className="hidden"/>
  </label>
    </form>
  </div>

  <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
 <div>
   <label htmlFor="name" >Name: </label>
   <div className="bg-slate-100 p-2">
   <input id="name" className="w-full h-full
 outline-none"  value={name} type="text" onChange={(e)=>setName(e.target.value)} placeholder="please enter your name"/>
   </div>  
 </div> 
  
 <div>
   <label htmlFor="email" >Email: </label>
   <div className="bg-slate-100 p-2">
   <input id="email" className="w-full h-full
 outline-none"  value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter your emaile"/>
   </div>  
 </div> 
   <div>
   <label htmlFor="password">Password: </label>
   <div className="bg-slate-100 p-2 flex">
   <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full h-full
 outline-none" type={showPassword ? "text":"password"} placeholder="enter password"/>
   <div className="cursor-pointer" onClick={
()=>setShowPassword((prev)=>!prev)}>
    <span>
    {
     showPassword? (
      <FaEyeSlash/>
    ):
    ( <FaEye/>)
    }
    
   </span>
    </div>
    
  </div> 
 </div>
 <div>
   <label htmlFor="confirmpassword">Confirm Password: </label>
   <div className="bg-slate-100 p-2 flex">
   <input id="confirmpassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full h-full
 outline-none" type={showConfirmPassword ? "text":"password"} placeholder="enter password"/>
   <div className="cursor-pointer" onClick={
()=>setShowConfirmPassword((prev)=>!prev)}>
    <span>
    {
     showPassword? (
      <FaEyeSlash/>
    ):
    ( <FaEye/>)
    }
    
   </span>
    </div>
    
  </div>
 
 </div>  

 <button className="bg-red-600 
text-white px-6 py-2 w-full max-w-[150px] 
rounded-full hover:scale-110 transition-all mx-auto
 block mt-4">SignUp</button>

 </form>
 <p>{email}</p>

 <p className="my-5"><Link className="text-red-600 hover:text-red-700 hover:underline" to="/login">Already have an account? Login</Link></p>
 </div>

</div>
 
 </section>
 </>
)

}

export default SignUp;
