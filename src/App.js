import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from 'react';

import './App.css';

import Intro from './page/Intro'
import Me from './page/Me'
import Project from './page/Project'
import Contact from './page/Contact'


function App() {

  const [page, setPage] = useState(0);

  return (
    <div className="App">

      <header className="App-header">

        <BrowserRouter>

          <Links pageState={ [page, setPage] } />

          <SwitchTransition mode={ 'out-in' }>

            <CSSTransition
              key={ page }
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames="page"
            >
              <Routes>
                <Route path='/' element={ <Intro /> }></Route>
                <Route path='/me' element={ <Me /> }></Route>
                <Route path='/project' element={ <Project /> }></Route>
                <Route path='/contact' element={ <Contact /> }></Route>
              </Routes>

            </CSSTransition>

          </SwitchTransition>

        </BrowserRouter>

      </header>

    </div>
  );
}

function Links({ pageState }) {

  const [page, setPage] = pageState;

  function changePage() {
    setPage(page + 1)
  }

  return(
    <div className='pages' onClick={ changePage }>
      <Link to='/'>zero, </Link>
      <Link to='/me'>first, </Link>
      <Link to='/project'>second, </Link>
      <Link to='/contact'>third</Link> 
    </div>
  )
}

export default App;
