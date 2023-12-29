import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Team from './components/Team';
import Solutions from './components/Solutions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/sumadhwa">
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/team' element={<Team />}></Route>
        <Route exact path='/solutions' element={<Solutions />}></Route>
        <Route exact path='/contact' element={<ContactUs />}></Route>
        <Route exact path='/' element={<App />}></Route>        
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
