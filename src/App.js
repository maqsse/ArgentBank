import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';
import './App.css';


function App() {
  return (
    
      <BrowserRouter>
      
      <Routes>
      <Route exact path="/" element={<Accueil />}/>
        <Route exact path="/accueil" element={<Accueil />}/>
        <Route exact path="/login" element={<SignIn/>} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="*" element={<Error/>} />
      </Routes>
      
    </BrowserRouter>
  
  );
}

export default App;
