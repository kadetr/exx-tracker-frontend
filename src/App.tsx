import {FC} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

const App:FC = ()=> {

  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/history/:pageNumber' element={<HistoryScreen />} />
        <Route path="/admin/userlist" element={< UserListScreen/>} />
        <Route path="/admin/users/:id/edit" element={< UserEditScreen/>} />

        <Route path="/" element={<HomeScreen/>}  />
      </Routes>
    </Router>
  )
}

export default App;
