import { Link } from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { useState } from 'react';

import logo from '../logo.svg';
import '../App.css';


function Intro({ setPage }) {

    const intros = [
      {
        id : 1,
        title: 'SEULKI SEULKI SEULKI SEULKI SEULKI SEULKI',
        description: 'Hi, I\'m SeulKi',
        link : '/me'
      },
      {
        id : 2,
        title: 'MY PROJECTS! MY PROJECTS!',
        description: 'I studied Python, JS, HTML, React, NodeJs',
        link : '/project'
      },
      {
        id : 3,
        title: 'INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?',
        description: 'Contac me!',
        link : '/contact'
      }
    ]
  
    const [intro, setIntro] = useState(intros[0])
    
    function changeIntro(e){
      setIntro(intros[e.target.innerHTML])
    }

    function changePage(e){
      setPage(e.target.id)
    }
  
    return(
      <>
        <SwitchTransition mode={ 'out-in' }>

          <CSSTransition
            key={ intro.id }
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames="intro"
          >
            <div className='intro'>
              <h1 className='App-logo'>{ intro.id }</h1>
              <img src={logo} className="App-logo" alt="logo" />
              
              <h1>{ intro.title }</h1>
              <p>{ intro.description }</p>
            </div>
            
          </CSSTransition>
        
        </SwitchTransition>

  
        <div className='toPage'>
          <Link to={ intro.link } id={ intro.id } onClick={ changePage }>Lear More</Link>
        </div>
  
        <div className='introButtons'>
          <button onClick={ changeIntro }>0</button>
          <button onClick={ changeIntro }>1</button>
          <button onClick={ changeIntro }>2</button>
        </div>
  
      </>
    )
  
  }
  
  export default Intro;