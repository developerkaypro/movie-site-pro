import {createSlice} from "@reduxjs/toolkit";
import profile09 from "./profile09.png";
const initialState={
    user:null,
   isLogin:false

}

const userSlice=createSlice({
 name:"user",
 initialState,
 reducers:{
 setUserDetails:(state,action)=>{
    state.user=action.payload

    },
 setLogin:(state)=>{
    state.isLogin=true
  },
 setLoginFalse:(state)=>{
   state.isLogin=false
 }
}



})


export const {setUserDetails,setLogin,setLoginFalse}=userSlice.actions

export default userSlice.reducer;
