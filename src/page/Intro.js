import { Link } from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { useState } from 'react';

import logo from '../logo.svg';


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
      <div className="Intro">
        <SwitchTransition mode={ "out-in" }>

          <CSSTransition
            key={ intro.id }
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames="Intro-transition"
          >
            <div>
              <h1 className="Intro-logo">{ intro.id }</h1>
              <img src={logo} className="Intro-logo" alt="logo" />
              
              <h1>{ intro.title }</h1>
              <p>{ intro.description }</p>
              <Link to={ intro.link } id={ intro.id } onClick={ changePage }>Lear More</Link>
            </div>
            
          </CSSTransition>
        
        </SwitchTransition>

        <div>
          <button onClick={ changeIntro }>0</button>
          <button onClick={ changeIntro }>1</button>
          <button onClick={ changeIntro }>2</button>
        </div>
  
  
      </div>
    )
  
  }
  
  export default Intro;