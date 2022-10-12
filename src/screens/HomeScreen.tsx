import React, { MouseEventHandler, useEffect } from "react";
import NewExerciseModal from "../components/NewExerciseModal";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "../components/NewExerciseModal/newExerciseModalElements";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createExercise, deleteExercise, listLatestExercises, updateExercise } from "../actions/exerciseActions";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";

const HomeScreen = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const userLogin = useAppSelector((state: RootState) => state.userLogin);
    const { userInfo } = userLogin;

    const exerciseCreate = useAppSelector((state: RootState) =>state.exerciseCreate);
    const {success: successCreate} = exerciseCreate;

    const exerciseLatest = useAppSelector((state: RootState) =>state.exerciseLatest);
    const {exercises} = exerciseLatest;

    const exerciseDelete = useAppSelector((state: RootState) => state.exerciseDelete)
    const { success: successDelete } = exerciseDelete;

    const exerciseUpdate = useAppSelector((state: RootState) => state.exerciseUpdate)
    const { success: successUpdate } = exerciseUpdate;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
          }
        }, [navigate, userInfo]);

    useEffect(() => {
        if(userInfo || successCreate || successDelete || successUpdate){
            dispatch(listLatestExercises());
        }
        
        }, [dispatch, userInfo,successCreate, successDelete, successUpdate ]);

    const submitHandler = (event: React.SyntheticEvent, sportType: string, exerciseDate: string, calories: string, distance: string, duration: string) => {
        event.preventDefault(); 
        dispatch(createExercise( sportType, exerciseDate, calories, distance, duration, userInfo["_id"]));
          
     };

     const updateHandler = (event: React.SyntheticEvent, _id: string, sportType: string, exerciseDate: string, calories: string, distance: string, duration: string) => {
        event.preventDefault();
          dispatch(updateExercise( {_id, sportType, exerciseDate, calories, distance, duration, userId: userInfo["_id"]}));
     };

     
     const deleteHandler = (e: MouseEventHandler<HTMLButtonElement>, id: any) => {
        if (window.confirm('Do you want to delete this exercise?')) {
          dispatch(deleteExercise(id));
        }
      }
    
    return(
    <>
        <ExerciseList 
            exercises = {exercises} 
            page={1} 
            pages={1} 
            deleteHandler={deleteHandler}
            updateHandler = {updateHandler}
        />
        
        <ModalProvider backgroundComponent={FadingBackground}>
            <NewExerciseModal submitHandler = {submitHandler}/>
        </ModalProvider>
    </>
    )
}

export default HomeScreen;