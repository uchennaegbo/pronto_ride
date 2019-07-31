import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Login from './Components/Forms/Login/Login';
import Dashboard from './Components/DashBoard/DbView/DbView';
import SignUp from './Components/Forms/SignUp/SignUp';
import CarManagers from './Components/CarManagers/CarManagers';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/car-managers" component={CarManagers} />
    </Switch>
  </div>
);

export default App;
