import React from 'react';
import './App.css';
import HeaderLayout from './Components/HeaderLayout/HeaderLayout';
import SectionContent from './Components/Section/SectionContent';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Forms/Login/Login';
import Dashboard from './Components/DashBoard/DbView/DbView';
import SignUp from './Components/Forms/SignUp/SignUp';

const App = () => (
  <div className="App">
    <Navbar />
    <HeaderLayout />
    <SectionContent />
    <Dashboard />
    <Login />
    <SignUp />
  </div>
);

export default App;
