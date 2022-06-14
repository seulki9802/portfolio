import { useState } from 'react';
import { motion } from "framer-motion";
import me_love from '../assets/me_love.tiff'


  
function Me() {

  document.querySelector('body').style.backgroundColor = '#9896F1';

  const [show, setShow] = useState(false)

  return (
    <div className="Me">
      { show ? <MyInfo /> : <Header setShow={ setShow } /> }
    </div>
  );
}

function MyInfo() {

  const infos = [
    {
      title: 'Profil🗒',
      contents: '출생: 1998.02.24.\n학력: 조선대학교 졸업(2022. 02.)',
    },
    {
      title: 'Skills⚒️',
      contents: 'Node.js, JavaScript, React, MongoDB',
    },
    {
      title: 'LOVE🤍',
      contents: '문제를 해결 하는 것을 좋아합니다.\n 타인의 필요성을 충족하는 것을 좋아합니다.',
    },
    {
      title: 'Why WEB?🖥',
      contents: '\v 웹은 아주 매력적인 도구입니다. 타인과 쉽게 연결될 수 있으며 우리는 그들의 요구에 반응할 수 있습니다.\n\n\v 저는 웹을 통해 사용자에게 다양하고 다채로운 경험을 제공하고 싶습니다. 사용자의 문제에 귀 기울여 이를 해결하고 양질의 서비스를 제공하는 웹 개발자를 꿈 꿉니다.',
    },
  ]

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return(
    <div className="Me-info">

      <motion.ul
        className="Me-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {infos.map((info, index) => (
        <motion.li key={index} className="Me-item" variants={item}>
          <h4>{ info.title }</h4>
          <p style={ { whiteSpace: 'pre-line' }}>{ info.contents }</p>
        </motion.li>
        ))}
      </motion.ul>
    </div>
  )

}

function Header({ setShow }) {

  return(
    <div className='Me-header'>
      
      <motion.div
        whileHover={{ scale: 1.2, rotate: 30 }}
        whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
      >
        <img src={ me_love } onClick={ () => setShow(true) } alt="me" />
      </motion.div>

      <p>나에대해 알아볼램!?</p>
      <span onClick={ () => setShow(true) }>GO</span>
    </div>
  )

}

export default Me;