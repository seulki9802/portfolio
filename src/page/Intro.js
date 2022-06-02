import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

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

function Intro({ setPage }) {

  const [intro, setIntro] = useState(intros[0]);
  const [rotateDir, setRotateDir] = useState(100);
  
  document.querySelector('body').style.backgroundColor = intro.background;

  function changeIntro(e) {
    //clear timeOut
    clearTimeout(streamIntro)

    // change intro
    var id = parseInt(e.target.getAttribute('name'));
    setIntro(intros[id])

    // animate intro
    var now = intro.id;
    var next = id;
    (now < next) ? setRotateDir(100) : setRotateDir(-100);
  }

  const streamIntro = setTimeout(() => {

    var now = intro.id;
    var next = now + 1;
    if ( next >= intros.length ) next = 0
    var ele = document.createElement('span');
    ele.setAttribute('name', next);

    changeIntro({ target: ele })

  }, 2000)

  return(
    <div className="Intro">

      <motion.div key={ intro.id } initial={{ rotate: rotateDir }} animate={{ rotate: 0 }} className="Intro-intro">
        <div>
          {Array.from(intro.title).map((letter, index) => {
            if (letter === ' ') return <br key={ index } />
            return <span key={ index } className='Intro-title' id={ intro.title + index }>{ letter }</span>
          })}
        </div>

        <p>{ intro.description }</p>
        <Link to={ intro.link } className='Intro-link' onClick={ () => setPage(intro.link) }>Lear More</Link>

      </motion.div>

      <div className='Intro-buttons'>

        {intros.map( (intro_i) => {

          var classes = 'Intro-button';
          if (intro.id === intro_i.id) classes += ' Intro-button-active'

          return <button
                  key={ intro_i.id }
                  name={ intro_i.id }
                  className={ classes }
                  onClick={ changeIntro }
                />
        })}

      </div>
    </div>
  )

}

export default Intro;