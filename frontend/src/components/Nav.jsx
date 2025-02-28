import {GrSearch} from "react-icons/gr";
import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import Logo from "./Logo";
import summaryApi from "../common/index";
import {toast} from "react-toastify";
import {setUserDetails,setLoginFalse} from "../store/userSlice"
import {FaRegCircleUser} from "react-icons/fa6";
import {FaShoppingCart} from "react-icons/fa";
const Nav=()=>{
const navigate=useNavigate()
const dispatch=useDispatch()
const user=useSelector(state =>state?.persisted?.user?.user)
const isLogin=useSelector(state=>state?.persisted?.user?.isLogin)
console.log("state really",user)
const handleLogout=async ()=>{
 const fetchData=await fetch(summaryApi.logout_user.url,
  {
   method:summaryApi.logout_user.method,
   credentials:"include"

})

const data=await fetchData.json()
console.log("logout message",data.message)
if(data.success){
toast.success(data.message)
dispatch(setUserDetails(null))
await dispatch(setLoginFalse())

navigate("/login")
}

if(data.error){

toast.error(data.message)
}


}
 return (
 <>
<header className="h-16 shadow-md bg-white">
<div className="h-full container mx-auto flex
 items-center px-4 justify-between">
  <div>
{isLogin ?(
   <Link to="/"> 
   <Logo/>
  </Link>) :
  
 ( <Logo/>)
}
  </div>
  
 <div className="flex items-center gap-4">
 <div className="text-3xl cursor-pointer">
  {
  user?(
      <img className="object-cover"
 src={user.profilePic?user.profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNVU3_-plmJMSWx2FWla6KeaeXo17G6EJGWt4vbrXHa0zLaVrwcL2gyE&s"} 
className="w-10 h-10 rounded-full" alt={user?.name}/>
    ):

     (<FaRegCircleUser/>)
     }
</div>
  

 <div>
{user?._id?(
 <button onClick={handleLogout} className="px-3 py-1 bg-red-600 rounded-full
text-white hover:bg-red-700">LogOut</button>

):

<Link to="/login" className="px-3 py-1 bg-red-600 rounded-full
text-white hover:bg-red-700">Login</Link>
}

  </div>
</div> 
  
</div>
</header>

 </>
)

}

export default Nav;
