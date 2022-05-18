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

          <Links setPage={ setPage } />

          <SwitchTransition mode={ 'out-in' }>

            <CSSTransition
              key={ page }
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames="page"
            >
              <Routes>
                <Route path='/' element={ <Intro setPage={ setPage } /> }></Route>
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

function Links({ setPage }) {

  function changePage(e) {
    setPage(e.target.id)
  }
  return(
    <div className='links'>
      <ul onClick={ changePage }>
        <Link to='/' ><li id='0'>zero</li></Link>
        <Link to='/me' ><li id='1'>frist</li></Link>
        <Link to='/project' ><li id='2'>second</li></Link>
        <Link to='/contact' ><li id='3'>third</li></Link> 
      </ul>
    </div>
  )
}

export default App;