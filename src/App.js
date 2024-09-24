import './App.scss';
import React from 'react';
import {Route,Routes, BrowserRouter} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route Component={WelcomePage} path='/' exact/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
