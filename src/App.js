import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from 'react';

import './App.css';

import Intro from './page/Intro';
import Me from './page/Me';
import Project from './page/Project';
import Contact from './page/Contact';


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
              classNames="App-pageTransition"
            >
              <Routes>
                <Route path='/' element={ <Intro setPage={ setPage }/> } />
                <Route path='/me' element={ <Me /> } />
                <Route path='/contact' element={ <Contact /> } />
              </Routes>

            </CSSTransition>

          </SwitchTransition>

          <Routes>
            <Route path='/project' element={ <Project /> }></Route>
          </Routes>

        </BrowserRouter>

      </header>

    </div>
  );
}

function Links({ setPage }) {

  function changePage(e) {
    setPage(e.target.name)
  }
  return(
    <div className='App-links'>
      <ul onClick={ changePage }>
        <Link to='/' ><li name='0'>zero</li></Link>
        <Link to='/me' ><li name='1'>first</li></Link>
        <Link to='/project' ><li name='2'>second</li></Link>
        <Link to='/contact' ><li name='3'>third</li></Link> 
      </ul>
    </div>
  )
}

export default App;