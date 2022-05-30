import { Link } from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { useState } from 'react';
import $ from 'jquery';

// import logo from '../logo.svg';

function Intro({ setPage }) {

  const intros = [
    {
      id : 0,
      title: 'HELLO! I\'M SEULKI',
      description: 'Hi, I\'m SeulKi',
      link : '/me',
      background: '#FFD5E5'
    },
    {
      id : 1,
      title: 'ABOUT ME',
      description: 'Hi, I\'m SeulKi',
      link : '/me',
      background: '#9896F1'
    },
    {
      id : 2,
      title: 'MY PROJECTS!',
      description: 'I studied Python, JS, HTML, React, NodeJs',
      link : '/project',
      background: '#D59BF6'
    },
    {
      id : 3,
      title: 'INTERESTED?',
      description: 'Contac me!',
      link : '/contact',
      background: '#EDB1F1'
    }
  ]

  const [intro, setIntro] = useState(intros[0])
  const [buttonActive, setButtonActive] = useState(['Intro-active', '', '', ''])
  
  document.querySelector('body').style.backgroundColor = intro.background;

  function changeIntro(id) {
    clearTimeout(streamIntro)
    setIntro(intros[id])

    var ls = ['', '', '', ''];
    ls[id] = 'Intro-active';
    setButtonActive(ls)
  }

  function changePage(e){
    setPage(e.target.id)
  }

  function clickIntro(e){
    var click = e.target.name;
    changeIntro(click)
  }

  const streamIntro = setTimeout(() => {
    var now = intro.id
    var next;
    if ( now === 3 ) next = 0;
    else next = now + 1;
    changeIntro(next)

  }, 3000)

  function addClass(e) {
    console.log(e)
    // e.target.classList.add('Intro-title-hover')
  }

  function rmClass(e) {
    e.target.classList.remove('Intro-title-hover')
  }


  return(
    <div className="Intro">
      <SwitchTransition mode={ "out-in" }>

        <CSSTransition
          key={ intro.id }
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames="Intro-transition"
        >
          <div className='Intro-intro'>

            {
              Array.from(intro.title).map((letter, index) => {
                if (letter === ' ') return <br key={ index } />
                return <span key={ index } className='Intro-title' id={ intro.title + index }>{ letter }</span>
              })
            }
            <p>{ intro.description }</p>
            <Link to={ intro.link } onClick={ changePage } className='Intro-link'>Lear More</Link>

          </div>
          
        </CSSTransition>
      
      </SwitchTransition>

      <div className='Intro-buttons'>
        {
          intros.map( (intro) => {
            return <button
                    key={ intro.id }
                    name={ intro.id }
                    className={ 'Intro-button ' + buttonActive[intro.id]}
                    onClick={ clickIntro }
                  />
          })
        }
      </div>
    </div>
  )

}

export default Intro;