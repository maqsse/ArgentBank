import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Accueil />}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
