import './App.scss';
import React from 'react';
import {Route,Routes, BrowserRouter} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';

function App(props) {
  const user = {
     nome: ""
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route Component={WelcomePage} path='/' exact/>
            <Route Component={MainPage} path='/mainpage' exact/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
