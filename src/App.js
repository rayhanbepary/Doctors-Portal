import React, { createContext, useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctors from './components/Dashboard/AddDoctors/AddDoctors';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route exact path="/doctor/appointment">
          <Dashboard></Dashboard>
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/doctor/adddoctors">
          <AddDoctors></AddDoctors>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/home" render={() => (window.location = "https://mrbsoft.com")}></Route>
      </Switch>
    </userContext.Provider>
  );
}

export default App;
