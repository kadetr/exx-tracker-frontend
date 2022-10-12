import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
//import { registerUser } from "../state/action-creators";
import RegisterWindow from "../components/RegisterWindow";
//import { bindActionCreators } from 'redux';
//import { actionCreators } from '../state';
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from "react-router-dom";


const RegisterScreen = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
  

   const userRegister = useAppSelector((state: RootState) => state.userRegister);
   //const { loading, error, userInfo } = userRegister;

   const {userInfo} = userRegister;

   useEffect(() => {
      if (userInfo) {
         navigate("/profile");
      }
   }, [navigate, userInfo]);
   

   const submitHandler = (event: React.SyntheticEvent, name: string, email: string, password: string, confirmPassword: string) => {
      event.preventDefault();
      if (password === confirmPassword) {
         dispatch(register(name, email, password, false));
      }
   };

   return <RegisterWindow submitHandler={submitHandler} />;
};

export default RegisterScreen;
