import React, { useEffect } from "react";
// import Message from '../components/Message'
// import Loader from '../components/Loader'

import { login } from "../actions/userActions";
import LoginWindow from "../components/LoginWindow";
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const dispatch = useAppDispatch();

   //  const location = useLocation();
    const navigate = useNavigate();


   const userLogin = useAppSelector((state: RootState) => state.userLogin);
   // const { loading, error, userInfo } = userLogin;

   const { userInfo } = userLogin;

   //const redirect = location.search ? location.search.split("=")[1] : "/";

   useEffect(() => {
      if (userInfo) {
         navigate("/");
      }
   }, [navigate, userInfo]);

   const submitHandler = (event: React.SyntheticEvent, email: string, password: string) => {
      event.preventDefault();
      dispatch(login(email, password));
   };

   return <LoginWindow submitHandler={submitHandler} />;
};

export default LoginScreen;
