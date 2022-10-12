import React, { useEffect } from "react";
// import Message from '../components/Message'
// import Loader from '../components/Loader'

import { getUserDetails, updateUserProfile } from "../actions/userActions";
import ProfileWindow from "../components/ProfileWindow";
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from "react-router-dom";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileScreen = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const userDetails = useAppSelector((state: RootState) => state.userDetails);
    const {  user } = userDetails

    const userLogin = useAppSelector((state: RootState) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateDetails = useAppSelector((state: RootState) => state.userUpdateDetails);
    const { success } = userUpdateDetails;

    useEffect(() => {
        if (!userInfo) {
          navigate('/login')
        } else {
          if (!user || !user["name"] ) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails('profile'));
            navigate("/profile");
          }
        }
      }, [dispatch, navigate, userInfo, user, success]);

      const submitHandler = (event: React.SyntheticEvent, name: string, email: string, password: string, confirmPassword: string) => {
        event.preventDefault();
        if (password === confirmPassword) {
           dispatch(updateUserProfile({name, email, password}));
        }
     };

      return <ProfileWindow submitHandler={submitHandler} user={user} />;
};
    
    export default ProfileScreen;

