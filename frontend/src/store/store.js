import {configureStore,combineReducers} from "@reduxjs/toolkit";
//import {apiSlice} from "./apiSlice";
import {persistReducer,persistStore} from "redux-persist";
import userReducer from "./userSlice"
import storage from "redux-persist/lib/storage";

const rootReducer=combineReducers({user:userReducer})
const persistConfig={
  key:"root",
  storage,
  version:1,

}

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
 reducer:{
    persisted: persistedReducer

},
middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
serializableCheck:false,

}),


})

export const persistor=persistStore(store);
