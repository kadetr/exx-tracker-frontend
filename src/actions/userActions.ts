import axios from "axios";
//import { AnyAction } from "redux";
import {
   USER_DELETE_FAIL_ADMIN,
   USER_DELETE_REQUEST_ADMIN,
   USER_DELETE_SUCCESS_ADMIN,
   USER_DETAILS_FAIL,
   USER_DETAILS_FAIL_ADMIN,
   USER_DETAILS_REQUEST,
   USER_DETAILS_REQUEST_ADMIN,
   USER_DETAILS_RESET,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_SUCCESS_ADMIN,
   USER_LIST_FAIL_ADMIN,
   USER_LIST_REQUEST_ADMIN,
   USER_LIST_SUCCESS_ADMIN,
   USER_LOGIN_FAIL,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   USER_REGISTER_FAIL,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS,
   USER_UPDATE_FAIL_ADMIN,
   USER_UPDATE_PROFILE_FAIL,
   USER_UPDATE_PROFILE_REQUEST,
   USER_UPDATE_PROFILE_SUCCESS,
   USER_UPDATE_REQUEST_ADMIN,
   USER_UPDATE_SUCCESS_ADMIN,
} from "../constants/userConstants";
import {Dispatch} from "redux";

import { UserAction } from "../types/custom";

import { RootState } from "../store";

export const register = (name: string, email: string, password: string, isAdmin: boolean) => async (dispatch: Dispatch<UserAction>) => {
    try {
       dispatch({
          type: USER_REGISTER_REQUEST,
          payload: {
            name, 
            email,
            password,
            isAdmin: false
         }
       });
 
       const config = {
          headers: {
             "Content-Type": "application/json",
          },
       };
 
       const { data } = await axios.post(
          "/api/users",
          { name, email, password },
          config
       );
 
       dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data,
       });
 
       // dispatch({
       //    type: USER_LOGIN_SUCCESS,
       //    payload: data,
       // });
 
       localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
       dispatch({
          type: USER_REGISTER_FAIL,
          payload:
             error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
       });
    }
 }

 export const login = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
   try {
      dispatch({
         type: USER_LOGIN_REQUEST,
      });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      const { data } = await axios.post(
         "/api/users/login",
         { email, password },
         config
      );

      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
   } catch (error: any) {
      dispatch({
         type: USER_LOGIN_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const logout = () => (dispatch: Dispatch<UserAction>) => {
   localStorage.removeItem('userInfo');
   dispatch({ type: USER_LOGOUT });
   dispatch({ type: USER_DETAILS_RESET });
   document.location.href = '/login';
 }

export const getUserDetails = (id: any) => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
   try {
     dispatch({
       type: USER_DETAILS_REQUEST,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         Authorization: `Bearer ${userInfo["token"]}`,
       },
     }

     const { data } = await axios.get(`/api/users/${id}`, config)
 
     dispatch({
       type: USER_DETAILS_SUCCESS,
       payload: data,
     })
   } catch (error: any) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
      // dispatch(logout())
     }
     dispatch({
       type: USER_DETAILS_FAIL,
       payload: message,
     })
   }
 }

 export const updateUserProfile = (user: any) => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
   try {
     dispatch({
       type: USER_UPDATE_PROFILE_REQUEST,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo["token"]}`,
       },
     }
 
     const { data } = await axios.put(`/api/users/profile`, user, config)
 
     dispatch({
       type: USER_UPDATE_PROFILE_SUCCESS,
       payload: data,
     })
     dispatch({
       type: USER_LOGIN_SUCCESS,
       payload: data,
     })
     localStorage.setItem('userInfo', JSON.stringify(data))
   } catch (error: any) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
       //dispatch(logout())
       localStorage.removeItem('userInfo');
       dispatch({ type: USER_LOGOUT });
       dispatch({ type: USER_DETAILS_RESET });
       document.location.href = '/login';
     }
     dispatch({
       type: USER_UPDATE_PROFILE_FAIL,
       payload: message,
     })
   }
 }

 export const listUsers = () => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
   try {
     dispatch({
       type: USER_LIST_REQUEST_ADMIN,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         Authorization: `Bearer ${userInfo["token"]}`,
       },
     }
 
     const { data } = await axios.get(`/api/users/admin`, config)
 
     dispatch({
       type: USER_LIST_SUCCESS_ADMIN,
       payload: data,
     })
   } catch (error: any) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
      //  dispatch(logout())
         localStorage.removeItem('userInfo');
         dispatch({ type: USER_LOGOUT });
         dispatch({ type: USER_DETAILS_RESET });
         document.location.href = '/login';
     }
     dispatch({
       type: USER_LIST_FAIL_ADMIN,
       payload: message,
     })
   }
 }

 export const deleteUser = (id: any) => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
   try {
     dispatch({
       type: USER_DELETE_REQUEST_ADMIN,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         Authorization: `Bearer ${userInfo["token"]}`,
       },
     }
 
     await axios.delete(`/api/users/admin/${id}`, config)
 
     dispatch({ type: USER_DELETE_SUCCESS_ADMIN })
   } catch (error: any) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
      //  dispatch(logout())
         localStorage.removeItem('userInfo');
         dispatch({ type: USER_LOGOUT });
         dispatch({ type: USER_DETAILS_RESET });
         document.location.href = '/login';
     }
     dispatch({
       type: USER_DELETE_FAIL_ADMIN,
       payload: message,
     })
   }
 }

 export const getUserById = (id: any) => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST_ADMIN,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo["token"]}`,
      },
    }

    const { data } = await axios.get(`/api/users/admin/${id}`, config)

    dispatch({
      type: USER_DETAILS_SUCCESS_ADMIN,
      payload: data,
    })
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
     // dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL_ADMIN,
      payload: message,
    })
  }
}

 export const updateUser = (user: any) => async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
   try {
     dispatch({
       type: USER_UPDATE_REQUEST_ADMIN,
     })
 
     const {
       userLogin: { userInfo },
     } = getState()
 
     const config = {
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo["token"]}`,
       },
     }
 
     const { data } = await axios.put(`/api/users/admin/${user.id}`, user, config)
 
     dispatch({ type: USER_UPDATE_SUCCESS_ADMIN })
 
     dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
 
     dispatch({ type: USER_DETAILS_RESET })
   } catch (error: any) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message
     if (message === 'Not authorized, token failed') {
       //dispatch(logout())
       localStorage.removeItem('userInfo');
       dispatch({ type: USER_LOGOUT });
       dispatch({ type: USER_DETAILS_RESET });
       document.location.href = '/login';
     }
     dispatch({
       type: USER_UPDATE_FAIL_ADMIN,
       payload: message,
     })
   }
 }