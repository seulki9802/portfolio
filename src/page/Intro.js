import { Link } from 'react-router-dom';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import { useState } from 'react';

import logo from '../logo.svg';
import '../App.css';


function Intro({introState}) {

    const intros = [
      {
        id : 0,
        title: 'SEULKI SEULKI SEULKI SEULKI SEULKI SEULKI',
        description: 'Hi, I\'m SeulKi',
        link : '/me'
      },
      {
        id : 1,
        title: 'MY PROJECTS! MY PROJECTS!',
        description: 'I studied Python, JS, HTML, React, NodeJs',
        link : '/project'
      },
      {
        id : 2,
        title: 'INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?INTERSTED?',
        description: 'Contac me!',
        link : '/contact'
      }
    ]
  
    const [intro, setIntro] = useState(intros[0])
    const [showIntro, setShowIntro] = useState(false)
    
    function changeIntro(e){
      setIntro(intros[e.target.innerHTML])
      setShowIntro(!showIntro)
    }
  
    return(
      <>
        <SwitchTransition mode={'out-in'}>

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

  
        <div className='page'>
          <Link to={ intro.link }>Lear More</Link>
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