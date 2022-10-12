import { EXERCISE_CREATE_FAIL, 
    EXERCISE_CREATE_REQUEST, 
    EXERCISE_CREATE_RESET, 
    EXERCISE_CREATE_SUCCESS,
    EXERCISE_TOP_REQUEST,
    EXERCISE_TOP_SUCCESS,
    EXERCISE_TOP_FAIL,
    EXERCISE_LIST_REQUEST,
    EXERCISE_LIST_SUCCESS,
    EXERCISE_LIST_FAIL,
    EXERCISE_DETAILS_REQUEST,
    EXERCISE_DETAILS_SUCCESS,
    EXERCISE_DETAILS_FAIL,
    EXERCISE_DELETE_REQUEST,
    EXERCISE_DELETE_SUCCESS,
    EXERCISE_DELETE_FAIL,
    EXERCISE_UPDATE_REQUEST,
    EXERCISE_UPDATE_SUCCESS,
    EXERCISE_UPDATE_FAIL,
    EXERCISE_UPDATE_RESET
} from "../constants/exerciseConstants"
import { ExerciseAction } from "../types/custom"

export const exerciseCreateReducer = (state = {exerciseInfo: {}}, action: ExerciseAction) => {
    switch (action.type) {
      case EXERCISE_CREATE_REQUEST:
        return { loading: true }
      case EXERCISE_CREATE_SUCCESS:
        return { loading: false, success: true, exerciseInfo: action.payload }
      case EXERCISE_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case EXERCISE_CREATE_RESET:
        return {}
      default:
        return state
    }
  }

  export const exerciseLatestReducer = (state = { exercises: [] }, action: ExerciseAction) => {
    switch (action.type) {
      case EXERCISE_TOP_REQUEST:
        return { loading: true, exercises: [] }
      case EXERCISE_TOP_SUCCESS:
        return { loading: false, exercises: action.payload }
      case EXERCISE_TOP_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const exerciseListReducer = (state = {exercises: []}, action: ExerciseAction) => {
    switch (action.type){
        case EXERCISE_LIST_REQUEST:
            return { loading: true, exercises: [] }
        case EXERCISE_LIST_SUCCESS:
            return { loading: false, exercises: action.payload?.exercises, pages: action.payload?.pages, page: action.payload?.page }
      case EXERCISE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const exerciseDetailsReducer = (
    state = { exercise: { } },
    action: ExerciseAction
  ) => {
    switch (action.type) {
      case EXERCISE_DETAILS_REQUEST:
        return { ...state, loading: true }
      case EXERCISE_DETAILS_SUCCESS:
        return { loading: false, exercise: action.payload }
      case EXERCISE_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const exerciseDeleteReducer = (state = {success: false}, action: ExerciseAction) => {
    switch (action.type) {
      case EXERCISE_DELETE_REQUEST:
        return { loading: true, success: false }
      case EXERCISE_DELETE_SUCCESS:
        return { loading: false, success: true }
      case EXERCISE_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const exerciseUpdateReducer = (state = {exercise: {}}, action: ExerciseAction) =>{
    switch (action.type) {
      case EXERCISE_UPDATE_REQUEST:
      return { loading: true }
    case EXERCISE_UPDATE_SUCCESS:
      return { loading: false, success: true, exercise: action.payload }
    case EXERCISE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case EXERCISE_UPDATE_RESET:
      return { exercise: {} }
    default:
      return state
    }
  }