import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import $ from 'jquery';

import './App.css';

import Intro from './page/Intro';
import Me from './page/Me';
import Project from './page/Project';
import Contact from './page/Contact';


function App() {

  const [page, setPage] = useState(window.location.pathname);

  //페이지 바뀔 때 Link 활성화 시키기
  useEffect(() => {
    var links = $('a')
  
    links.map((i) => {
      var link = links[i]
      link.className -= ' App-link-active'
      if (link.getAttribute('href') === page) link.className += ' App-link-active'
    })
  },[page])

  return (
    <div className="App">

      <header className="App-header">

          
          <BrowserRouter>

            <Links setPage={ setPage } />

            <motion.div key={ page } initial={{ scale: 0 }} animate={{ scale: 1 }} >
              <Routes>
                <Route path='/' element={ <Intro setPage={ setPage }/> } />
                <Route path='/about' element={ <Me /> } />
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
    setPage(e.target.getAttribute('href'));
  }
  
  return(
    <div className='App-links'>

      <ul onClick={ changePage }>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/project'>project</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>

    </div>
  )
}

export default App;













// const pages = [
//   { name: 'home', link: '/' },
//   { name: 'about', link: '/about' },
//   { name: 'project', link: '/project' },
//   { name: 'contact', link: '/contact' }
// ]

        {/* {pages.map((page_i) => {
          return <li key={ page_i.name }><Link to={ page_i.link }>{ page_i.name }</Link></li>
        })} */}