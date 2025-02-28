import {createApi,fetchBaseQuery} from
 "@reduxjs/toolkit/query/react";

const BASE_URL="https://kayproback.onrender.com"

export const apiSlice=createApi({
  reducerPath:"fetch",
  baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
  endpoints:(builder)=>({
     getUserDetails:builder.query({
      query:()=>({
        url:"/api/user-details",
        credentials:"include"
       })
  })
  })


})

export const {useGetUserDetailsQuery}=apiSlice;
