import Movie from "./movies/Movies"
import {useNavigate} from "react-router-dom";
import Swiper from "../Swiper"
import {useEffect} from "react";
const Home=()=>{
  return (
  <>
 <main className="bg-red-500 flex flex-col mx-5">
 <Movie/>
 </main>
  </>
)

}
export default Home;
