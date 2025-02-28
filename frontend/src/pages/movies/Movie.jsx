/*import {useParams} from "react-router-dom";
import ChinaSalesmanJingo from "./video/ChinaSalesmanJingo.mp4"
const Movie=()=>{
const {movie}=useParams();
const [movieframe,setMovieFrame]=useState("")
const movieIframe=[{
name:"Hitman",
url:<iframe width="560" height="315" 
src="https://www.youtube.com/embed/fRh_vgS2dFE?si=nZuh92hyHF5YpwGz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,


}]
return (
<>  
  <div className="movie-cont">
 <div className="bg-red-500 text-red-600">
  <iframe  
src="https://player.vimeo.com/video/1060737545?h=581988f455" 
width="686" height="564" frameborder="0" allow="autoplay;
 fullscreen" allowfullscreen></iframe>
</div>
 
  </div>
</>
)

}
export default Movie;
*/
import { useParams } from "react-router-dom";
import {useState} from "react";
const Movie = () => {
  const { movie } = useParams();
  const [movieframe,setMovieFrame]=useState("")
const movieIframe={
name:"Hitman",
url:<iframe className="w-full" width="560" height="315"
 src="https://www.youtube.com/embed/fRh_vgS2dFE?si=nZuh92hyHF5YpwGz"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
 clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

}
  return (
    <>
      <div className="movie-cont">
        <div className="bg-red-500 object-fit text-red-600 relative" style={{ paddingBottom: '56.25%', height: 0 }}> {/* Add relative position and padding-bottom for aspect ratio */}
      {movieIframe.url}
        </div>
    
      </div>
    </>
  );
};

export default Movie;

