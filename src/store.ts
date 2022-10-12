import { combineReducers } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, PreloadedState, StateFromReducersMapObject } from '@reduxjs/toolkit';

import {
   userRegisterReducer,
   userLoginReducer,
   userDetailsReducer,
   userUpdateDetailsReducer,
   userListReducer,
   userByIdReducer,
   userDeleteReducer,
   userUpdateReducer
} from "./reducers/userReducers";

import { 
   exerciseCreateReducer,
   exerciseLatestReducer,
   exerciseListReducer,
   exerciseDetailsReducer,
   exerciseDeleteReducer,
   exerciseUpdateReducer
} from "./reducers/exerciseReducers";

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails:userDetailsReducer,
    userUpdateDetails:userUpdateDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userById: userByIdReducer,
    exerciseCreate: exerciseCreateReducer,
    exerciseLatest: exerciseLatestReducer,
    exerciseList: exerciseListReducer,
    exerciseDetails:exerciseDetailsReducer,
    exerciseDelete:exerciseDeleteReducer,
    exerciseUpdate: exerciseUpdateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo") || "")
   : null;

const preloadedState = {
   userLogin:{ userInfo: userInfoFromStorage }
 };

type RootStatePreloaded = StateFromReducersMapObject<typeof reducer>

export function initStore(preloadedState?: PreloadedState<RootStatePreloaded>) {
   return configureStore({
     reducer,
     preloadedState,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
   });
 }

 export const store = initStore(preloadedState as any);
 
type Store = ReturnType<typeof initStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store["getState"]>;
// Inferred type: {}
export type AppDispatch =  Store["dispatch"];

export default store;
