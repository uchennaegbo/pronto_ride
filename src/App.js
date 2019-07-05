import React from 'react';
import './App.css';
import HeaderLayout from './Components/HeaderLayout/HeaderLayout';
import SectionContent from './Components/Section/SectionContent';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderLayout />
      <SectionContent />
      <Form />
    </div>
  );
}

export default App;
