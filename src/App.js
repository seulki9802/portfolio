import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import { useState } from 'react';

import './App.css';
import logo from './logo.svg';

import Intro from './page/Intro'
import Me from './page/Me'
import Project from './page/Project'
import Contact from './page/Contact'


function App() {

  return (
    <div className="App">

      <header className="App-header">

        <BrowserRouter>

          <Links />

          <Routes>
            <Route path='/' element={ <Intro /> }></Route>
            <Route path='/me' element={ <Me /> }></Route>
            <Route path='/project' element={ <Project /> }></Route>
            <Route path='/contact' element={ <Contact /> }></Route>
          </Routes>

        </BrowserRouter>

      </header>

    </div>
  );
}

function Links() {
  return(
    <div className='pages'>
      <Link to='/'>zero, </Link>
      <Link to='/me'>first, </Link>
      <Link to='/project'>second, </Link>
      <Link to='/contact'>third</Link> 
    </div>
  )
}

export default App;
