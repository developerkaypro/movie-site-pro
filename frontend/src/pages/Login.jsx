import {FaEye} from "react-icons/fa";
import {useContext} from "react";
import {Link,useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {FaEyeSlash} from "react-icons/fa";
import summaryApi from "../common/index.js";
import context from "../context/index";
import {useState} from "react";
import {setUserDetails,setLogin} from "../store/userSlice.js";
import {useSelector,useDispatch} from "react-redux";
const Login=()=>{
 const [isLoading,setIsLoading]=useState(false)
 const [showPassword,setShowPassword]=useState(false)
 const [email,setEmail]=useState("");
 const dispatch=useDispatch();
const [password,setPassword]=useState("");
const navigate=useNavigate();
const {fetchUserDetails}=useContext(context)
 const handleSubmit=async (e)=>{
 
e.preventDefault();
 try{
 setIsLoading(true)
  const data={
   email,
   password
} 
 
const dataResponse=await fetch(summaryApi.signIn.url,{
     method:summaryApi.signIn.method,
    credentials:"include",
     headers:{

        "content-type":"application/json"
  },
  body:JSON.stringify(data)
    })


  const dataApi=await dataResponse.json()
 console.log("login",dataApi) 
 if(dataApi.success){
  toast.success(dataApi.message)
   dispatch(setUserDetails(dataApi.data))
   
 navigate("/")
  dispatch(setLogin())
  //await fetchUserDetails()
  
 }
 if(dataApi.error){
  toast.error(dataApi.message)
  }
}

 catch(err){}
 finally{
  setIsLoading(false)
 }
 }
 return (
  <>
 <section id="login">
 <div className="mx-auto container px-4">
  <div className="bg-white-600 p-2 w-full max-w-sm mx-auto">
  <div className="w-20 h-20 mx-auto">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdO9zt6ZepfW2wO7UKVy3uJEITV0-cRjoRQ&usqp=CAU" alt="Login icons"/>
  </div>

  <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
   <div>
   <label htmlFor="email" >Email: </label>
   <div className="bg-slate-100 p-2">
   <input id="email" className="w-full h-full
 outline-none"  value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email"/>
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

<Link to="/forgot-password" className="block w-fit
 ml-auto hover:underline hover:text-red-600">forgot password</Link> 
 </div>
   <button disabled={isLoading} className="bg-red-600 
text-white px-6 py-2 w-full max-w-[150px] 
rounded-full hover:scale-110 transition-all mx-auto
 block mt-4">{isLoading?<span>Loading..</span>:
<span>Login</span>
}</button>

 </form>
 

 <p className="my-5">Dont have an account? <Link className="text-red-600 hover:text-red-700 hover:underline" to="/sign-up">Signup</Link></p>
 </div>

 </div>
 
 </section>
 </>

)


}

export default Login;
