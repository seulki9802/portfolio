import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

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

            <motion.div key={ page } initial={{ scale: 0 }} animate={{ scale: 1 }} >
              <Routes>
                <Route path='/' element={ <Intro setPage={ setPage }/> } />
                <Route path='/me' element={ <Me /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/project' element={ <Project /> }></Route>
              </Routes>
            </motion.div>

          </BrowserRouter>


      </header>

    </div>
  );
}

function Links({ setPage }) {

  function changePage(e) {
    setPage(e.target.getAttribute('name'))
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