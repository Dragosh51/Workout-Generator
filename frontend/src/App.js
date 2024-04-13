import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { NonPrivateRoute, PrivateRoute } from './router/utils';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './store/actions/authActions'

// Components
import Login from "../src/pages/Log-in/login";
import Register from "../src/pages/register/register";
import Home from './components/home/Home';
import Landing from './pages/landingPage/landingPage'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" exact element={<Home />} />
    </Routes>



  );
}

export default App;
