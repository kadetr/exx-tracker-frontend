import axios from 'axios';
import { EXERCISE_CREATE_FAIL, EXERCISE_CREATE_REQUEST, EXERCISE_CREATE_SUCCESS, EXERCISE_DELETE_FAIL, EXERCISE_DELETE_REQUEST, EXERCISE_DELETE_SUCCESS, EXERCISE_DETAILS_FAIL, EXERCISE_DETAILS_REQUEST, EXERCISE_DETAILS_SUCCESS, EXERCISE_LIST_FAIL, EXERCISE_LIST_REQUEST, EXERCISE_LIST_SUCCESS, EXERCISE_TOP_FAIL, EXERCISE_TOP_REQUEST, EXERCISE_TOP_SUCCESS, EXERCISE_UPDATE_FAIL, EXERCISE_UPDATE_REQUEST, EXERCISE_UPDATE_SUCCESS } from '../constants/exerciseConstants';
import { USER_DETAILS_RESET, USER_LOGOUT } from '../constants/userConstants';
import { RootState } from '../store';
import { ExerciseAction, IExercise } from '../types/custom';
import {Dispatch} from "redux";

export const createExercise = (sportType: string, exerciseDate: string,
    calories: string,
    duration: string,
    distance: string, userId: string) => async (dispatch: Dispatch<ExerciseAction>, getState: () => RootState) => {
    try {

      dispatch({
        type: EXERCISE_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        },
      }
  
      const { data } = await axios.post(`/api/exercises`, {sportType, exerciseDate, calories, duration, distance, userId}, config)
  
      dispatch({
        type: EXERCISE_CREATE_SUCCESS,
        payload: data,
      })
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
        type: EXERCISE_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const listLatestExercises = () => async (dispatch: Dispatch<ExerciseAction>, getState: () => RootState) => {
    try {
      dispatch({ type: EXERCISE_TOP_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        },
      }
 
      const { data } = await axios.get(`/api/exercises/`, config)
  
      dispatch({
        type: EXERCISE_TOP_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: EXERCISE_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const listExercises = (pageNumber = "") => async (
    dispatch: Dispatch<ExerciseAction>, getState: () => RootState
  ) => {
    try {
      dispatch({ type: EXERCISE_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        },
      }
  
      const { data } = await axios.get(
        `/api/exercises/history/page?pageNumber=${pageNumber}`, config
      )
  
      dispatch({
        type: EXERCISE_LIST_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: EXERCISE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const getExerciseDatails = (id: string) => async (dispatch: Dispatch<ExerciseAction>) => {
    try {
      dispatch({ type: EXERCISE_DETAILS_REQUEST })
  
      const { data } = await axios.get(`/api/exercises/${id}`)
  
      dispatch({
        type: EXERCISE_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: EXERCISE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const deleteExercise = (id: string) => async (dispatch: Dispatch<ExerciseAction>, getState: () => RootState) => {
    try {
      dispatch({
        type: EXERCISE_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        },
      }
  
      await axios.delete(`/api/exercises/${id}`, config)
  
      dispatch({
        type: EXERCISE_DELETE_SUCCESS,
      })
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
        type: EXERCISE_DELETE_FAIL,
        payload: message,
      })
    }
  }

  export const updateExercise = (exercise: IExercise) => async (dispatch: Dispatch<ExerciseAction>, getState: () => RootState) => {
    try {
      dispatch({
        type: EXERCISE_UPDATE_REQUEST,
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
  
      const { data } = await axios.put(
        `/api/exercises/${exercise._id}`,
        exercise,
        config
      )
  
      dispatch({
        type: EXERCISE_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: EXERCISE_DETAILS_SUCCESS, payload: data })
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        // dispatch(logout())
        localStorage.removeItem('userInfo');
        dispatch({ type: USER_LOGOUT });
        dispatch({ type: USER_DETAILS_RESET });
        document.location.href = '/login';
      }
      dispatch({
        type: EXERCISE_UPDATE_FAIL,
        payload: message,
      })
    }
  }