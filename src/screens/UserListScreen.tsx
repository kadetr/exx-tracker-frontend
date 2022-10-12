import React, { useEffect } from "react";
import UserListTable from "../components/UserListTable";
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from "react-router-dom";
import { listUsers, deleteUser } from '../actions/userActions'

const UserListScreen = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const userList = useAppSelector((state: RootState) => state.userList);
    const {  users } = userList;

    const userLogin = useAppSelector((state: RootState) => state.userLogin);
    const { userInfo } = userLogin;

    const userDelete = useAppSelector((state: RootState) => state.userDelete);
    const { success } = userDelete;
    
    
    useEffect(() => {
        if (userInfo && userInfo["isAdmin"]) {
          dispatch(listUsers())
        } else {
            navigate('/login')
        }
      }, [dispatch, navigate, userInfo, success]);

      const deleteHandler = (id: string) => {
        if (window.confirm('Are you sure')) {
          dispatch(deleteUser(id))
        }
      }

      return <UserListTable users={users} adminId={userInfo["_id"]} deleteHandler={deleteHandler} />;
}

export default UserListScreen;