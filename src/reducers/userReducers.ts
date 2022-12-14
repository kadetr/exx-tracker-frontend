import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST_ADMIN,
    USER_LIST_SUCCESS_ADMIN,
    USER_LIST_FAIL_ADMIN,
    USER_LIST_RESET_ADMIN,
    USER_DELETE_REQUEST_ADMIN,
    USER_DELETE_SUCCESS_ADMIN,
    USER_DELETE_FAIL_ADMIN,
    USER_UPDATE_REQUEST_ADMIN,
    USER_UPDATE_SUCCESS_ADMIN,
    USER_UPDATE_FAIL_ADMIN,
    USER_UPDATE_RESET_ADMIN,
    USER_DETAILS_REQUEST_ADMIN,
    USER_DETAILS_SUCCESS_ADMIN,
    USER_DETAILS_FAIL_ADMIN,
    USER_DETAILS_RESET_ADMIN
} from "../constants/userConstants";

import { UserAction } from "../types/custom";


export const userRegisterReducer = (state = {userLogin: {}}, action: UserAction) => {
    switch (action.type) {
       case USER_REGISTER_REQUEST:
          return { loading: true };
       case USER_REGISTER_SUCCESS:
          return { loading: false, userInfo: action.payload };
       case USER_REGISTER_FAIL:
          return { loading: false, error: action.payload };
       case USER_LOGOUT:
          return {};
       default:
          return state;
    }
 };

 export const userLoginReducer = (state = {userLogin: {userInfo: {}}}, action: UserAction) => {
   switch (action.type) {
      case USER_LOGIN_REQUEST:
         return { loading: true };
      case USER_LOGIN_SUCCESS:
         return { loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
         return { loading: false, error: action.payload };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

export const userDetailsReducer = (state = { user: {} }, action: UserAction) => {
   switch (action.type) {
      case USER_DETAILS_REQUEST:
         return { ...state, loading: true };
      case USER_DETAILS_SUCCESS:
         return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      case USER_DETAILS_RESET:
         return { user: {} };
      default:
         return state;
   }
};

export const userUpdateDetailsReducer = (state = { user: {} }, action: UserAction) => {
   switch (action.type) {
     case USER_UPDATE_PROFILE_REQUEST:
       return { loading: true }
     case USER_UPDATE_PROFILE_SUCCESS:
       return { loading: false, success: true, userInfo: action.payload }
     case USER_UPDATE_PROFILE_FAIL:
       return { loading: false, error: action.payload }
     case USER_UPDATE_PROFILE_RESET:
       return {}
     default:
       return state
   }
 }

 export const userListReducer = (state = { users: [] }, action: UserAction) => {
   switch (action.type) {
     case USER_LIST_REQUEST_ADMIN:
       return { loading: true }
     case USER_LIST_SUCCESS_ADMIN:
       return { loading: false, users: action.payload }
     case USER_LIST_FAIL_ADMIN:
       return { loading: false, error: action.payload }
     case USER_LIST_RESET_ADMIN:
       return { users: [] }
     default:
       return state
   }
 }

 export const userByIdReducer = (state = { user: {} }, action: UserAction) => {
  switch (action.type) {
     case USER_DETAILS_REQUEST_ADMIN:
        return { ...state, loading: true };
     case USER_DETAILS_SUCCESS_ADMIN:
        return { loading: false, user: action.payload };
     case USER_DETAILS_FAIL_ADMIN:
        return { loading: false, error: action.payload };
     case USER_DETAILS_RESET_ADMIN:
        return { user: {} };
     default:
        return state;
  }
}
 
 export const userDeleteReducer = (state = {user: {}}, action: UserAction) => {
   switch (action.type) {
     case USER_DELETE_REQUEST_ADMIN:
       return { loading: true }
     case USER_DELETE_SUCCESS_ADMIN:
       return { loading: false, success: true }
     case USER_DELETE_FAIL_ADMIN:
       return { loading: false, error: action.payload }
     default:
       return state
   }
 }

 export const userUpdateReducer = (state = { user: {} }, action:UserAction) => {
   switch (action.type) {
     case USER_UPDATE_REQUEST_ADMIN:
       return { loading: true }
     case USER_UPDATE_SUCCESS_ADMIN:
       return { loading: false, success: true, user: action.payload }
     case USER_UPDATE_FAIL_ADMIN:
       return { loading: false, error: action.payload }
     case USER_UPDATE_RESET_ADMIN:
       return {
         user: {},
       }
     default:
       return state
   }
 }