import Header from "./components/Header.jsx";
import {Routes,Route,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/movies/Movie";
import {useSelector} from "react-redux";
import SignUp from "./pages/SignUp";
import Just from "./pages/just";
import ForgotPassword from "./pages/ForgotPassword";
import {useState} from "react";
function App(){
console.log("hello")
//const isLogin=true;
const isLogin=useSelector(state =>state?.persisted?.user?.isLogin)
console.log("app js",isLogin)
return (
<>
<Routes>
<Route path="/" element={<Header/>} >
<Route exact path="/"
 element={isLogin?<Home/>:<Navigate replace to="/login"/>}/>
<Route path="/login" element={!isLogin?<Login/>:
<Navigate replace to="/"/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/movies/movie/:movie" element={isLogin?<Movie/>:
<Navigate replace to="/login"/>}/>
</Route>
<Route path="/just" element={<Just/>}/>
</Routes>
 </>
  )
}

export default App;
