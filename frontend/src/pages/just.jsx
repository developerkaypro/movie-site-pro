import {useSelector,useDispatch} from "react-redux"
import {setUserDetails} from "../store/userSlice"

const Just=()=>{
 const dispatch=useDispatch()
 const user=useSelector((state)=>state.user.user)
  
 const handle=()=>{
   console.log("button clicked")
   dispatch(setUserDetails("how are you"))
}
return (
 <>
<ul>
{user && user.map((i)=><li>{i}</li>)}
</ul>
<button onClick={handle}>Change</button>
<p>is it changing</p>

 </>
)

}

export default Just;
