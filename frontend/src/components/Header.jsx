import {Outlet,useNavigate} from "react-router-dom";
import Footer from "./Footer";
import {ToastContainer} from "react-toastify";
import {useGetUserDetailsQuery} from "../store/apiSlice.js"
import {useDispatch,useSelector} from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {setUserDetails,setLogin} from "../store/userSlice";
import Nav from "./Nav";
import {useEffect,useState} from "react";
import summaryApi from "../common/index";
import context from "../context/index";
const Header=()=>{
 
 const [isLoading,setIsLoading]=useState(false)
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const {isLogin}=useSelector((state)=>state.persisted)
  
/*const fetchUserDetails=async ()=>{

// setIsLoading(true)
 const dataResponse=await fetch(summaryApi.current_user.url,{
  method:"GET",
  credentials:"include",
})
 const dataApi=await dataResponse.json();
 if(dataApi.success){
    dispatch(setUserDetails(dataApi.data))
    dispatch(setLogin())
   console.log("user details dispatched",isLogin)
  }


 };

 useEffect(()=>{
  fetchUserDetails()
},[])

*/

 const fetchUserDetails=()=>{
  console.log("nothinh")

  }
return (
 <>
 <context.Provider value={{fetchUserDetails}}>
 <ToastContainer/>
 <Nav/>
 <main className="min-h-[calc(100vh-100px)]">
 {isLoading?(<div>Loading...</div>):(<Outlet/>)}
 </main>
 <Footer/>
 </context.Provider>
 </>
)

}

export default Header;
