import { Link } from 'react-router-dom';
import { useState } from 'react';
import { animate, motion } from "framer-motion";

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
  const [rotate, setRotate] = useState(0)
  const [buttonActive, setButtonActive] = useState(['Intro-active', '', '', ''])
  
  document.querySelector('body').style.backgroundColor = intro.background;

  if (rotate !==0 ) {
    setTimeout(() => {
      setRotate(0)
      clearTimeout(streamIntro)
    }, 100)
  }

  function changeIntro(e) {
    // change intro
    var id = parseInt(e.target.getAttribute('name'));
    setIntro(intros[id])

    // change button
    var ls = ['', '', '', ''];
    ls[id] = 'Intro-active';
    setButtonActive(ls)
    
    // animate intro
    var now = intro.id;
    var next = id;
    if (now > next) setRotate(-10)
    else if (now < next) setRotate(10)
    else setRotate(0)
  }

  const streamIntro = setTimeout(() => {
    var now = intro.id;
    var next = now + 1;
    if ( next >= intros.length ) next = 0
    var ele = document.createElement('span');
    ele.setAttribute('name', next);

    changeIntro({ target: ele })

  }, 1000)

  return(
    <div className="Intro">

      <motion.div initial={{ rotate: 0 }} animate={{ rotate: rotate }} className="Intro-intro">

        {Array.from(intro.title).map((letter, index) => {
          if (letter === ' ') return <br key={ index } />
          return <span key={ index } className='Intro-title' id={ intro.title + index }>{ letter }</span>
        })}

        <p>{ intro.description }</p>

        <Link to={ intro.link } className='Intro-link'>Lear More</Link>

      </motion.div>

      <div className='Intro-buttons'>

        {intros.map( (intro) => {
          return <button
                  key={ intro.id }
                  name={ intro.id }
                  className={ 'Intro-button ' + buttonActive[intro.id]}
                  onClick={ changeIntro }
                />
        })}

      </div>
    </div>
  )

}

export default Intro;