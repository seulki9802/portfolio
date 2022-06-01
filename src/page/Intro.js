import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

function Intro({ setPage }) {

  console.log('rendering!')

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
  // const [rotate, setRotate] = useState(0)
  const [buttonActive, setButtonActive] = useState(['Intro-active', '', '', ''])
  
  document.querySelector('body').style.backgroundColor = intro.background;

  // if (rotate !==0 ) {

  //   setTimeout(() => {
  //     clearTimeout(streamIntro)
  //     setRotate(0)
  //   }, 100)

  // }

  function changeIntro(e) {
    //clear timeOut
    clearTimeout(streamIntro)

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
    // if (now > next) setRotate(rotate - 10)
    // else if (now < next) setRotate(rotate + 10)
    // else setRotate(0)

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

      {/* <motion.div initial={{ rotate: 0 }} animate={{ rotate: rotate }} className="Intro-intro"> */}
      <motion.div key={ intro.id } initial={{ rotate: -10 }} animate={{ rotate: 0 }} className="Intro-intro">
      {/* 이 부분은 조건문을 써서 다시 만들자! useState까지 쓸 필요는 없을 거 같다. */}

        {Array.from(intro.title).map((letter, index) => {
          if (letter === ' ') return <br key={ index } />
          return <span key={ index } className='Intro-title' id={ intro.title + index }>{ letter }</span>
        })}

        <p>{ intro.description }</p>

        <Link to={ intro.link } className='Intro-link'>Lear More</Link>

      </motion.div>

      <div className='Intro-buttons'>

        {intros.map( (intro_i) => {

          return <button
                  key={ intro_i.id }
                  name={ intro_i.id }
                  className={ 'Intro-button ' + buttonActive[intro_i.id]}
                  onClick={ changeIntro }
                />
        })}

      </div>
    </div>
  )

}

export default Intro;