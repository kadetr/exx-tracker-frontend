import React, { MouseEventHandler, useEffect } from "react";
import NewExerciseModal from "../components/NewExerciseModal";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "../components/NewExerciseModal/newExerciseModalElements";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createExercise, deleteExercise, listExercises, updateExercise } from "../actions/exerciseActions";
import { RootState } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";

const HistoryScreen = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {pageNumber} = useParams() || "1";

    const userLogin = useAppSelector((state: RootState) => state.userLogin);
    const { userInfo } = userLogin;

    const exerciseCreate = useAppSelector((state: RootState) =>state.exerciseCreate);
    const {success: successCreate} = exerciseCreate;

    const exerciseList = useAppSelector((state: RootState) =>state.exerciseList);
    const {exercises, page, pages} = exerciseList;

    const exerciseDelete = useAppSelector((state: RootState) => state.exerciseDelete)
    const { success: successDelete } = exerciseDelete

    const exerciseUpdate = useAppSelector((state: RootState) => state.exerciseUpdate)
    const { success: successUpdate } = exerciseUpdate;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
          }
        }, [navigate, userInfo]);

    useEffect(() => {
        if(userInfo){
            dispatch(listExercises(pageNumber));
        }
        
        }, [dispatch, userInfo,successCreate, pageNumber, successDelete, successUpdate ]);


    const submitHandler = (event: React.SyntheticEvent, sportType: string, exerciseDate: string, calories: string, distance: string, duration: string) => {
        event.preventDefault();
          dispatch(createExercise( sportType, exerciseDate, calories, distance, duration,userInfo["_id"]));
     };

     const updateHandler = (event: React.SyntheticEvent, _id: string, sportType: string, exerciseDate: string, calories: string, distance: string, duration: string) => {
        event.preventDefault();
          dispatch(updateExercise( {_id, sportType, exerciseDate, calories, distance, duration, userId: userInfo["_id"]}));
     };

     const deleteHandler = (e: MouseEventHandler<HTMLButtonElement>, id: any) => {
        if (window.confirm('Do you want to delete this exercise?')) {
          dispatch(deleteExercise(id))
        }
      }
    
    return(
    <>
         <ExerciseList 
            exercises = {exercises} 
            page={page} 
            pages={pages} 
            deleteHandler={deleteHandler}
            updateHandler = {updateHandler}
        />
        <ModalProvider backgroundComponent={FadingBackground}>
            <NewExerciseModal submitHandler = {submitHandler}/>
        </ModalProvider>
    </>
    )
}

export default HistoryScreen;