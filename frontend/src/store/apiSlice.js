import {createApi,fetchBaseQuery} from
 "@reduxjs/toolkit/query/react";

const BASE_URL="http://localhost:8080/"

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
