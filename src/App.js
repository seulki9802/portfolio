import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

import './App.css';

import Intro from './page/Intro';
import Me from './page/Me';
import Project from './page/Project';
import Contact from './page/Contact';


function App() {
  const [page, setPage] = useState('/');

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

  return(
    <div className='App-links'>

      <ul onClick={ (e) => setPage(e.target.getAttribute('href')) }>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/me'>about</Link></li>
        <li><Link to='/project'>project</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>

    </div>
  )
}

export default App;