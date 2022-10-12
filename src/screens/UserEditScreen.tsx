import React, { useEffect } from "react";
// import Message from '../components/Message'
// import Loader from '../components/Loader'

import UserEditWindow from "../components/UserEditWindow";
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getUserById } from '../actions/userActions'
import { USER_UPDATE_RESET_ADMIN } from "../constants/userConstants";

const UserEditScreen = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const userById = useAppSelector((state: RootState) => state.userById);
    const {user} = userById;

    const userUpdate = useAppSelector((state: RootState) => state.userUpdate);
    //const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;
    const {success: successUpdate} = userUpdate;

    useEffect(() => {
        if (successUpdate) {
           dispatch({ type: USER_UPDATE_RESET_ADMIN });
           navigate("/admin/userlist");
        } 
        else {   
           dispatch(getUserById(id));
           
        }
     }, [dispatch, navigate, id, successUpdate]);

     const submitHandler = (event: React.SyntheticEvent, name: string, email: string, isAdmin: boolean) => {
        event.preventDefault();
        dispatch(updateUser({ id, name, email, isAdmin }));
     };
  
     return <UserEditWindow submitHandler={submitHandler} user={user} />;
  
}

export default UserEditScreen;