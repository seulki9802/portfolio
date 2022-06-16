import { useState } from 'react';
import { motion } from "framer-motion";
import me_love from '../assets/me_love.jpeg'
import me_smile from '../assets/me_smile.JPG'



  
function Me() {

  document.querySelector('body').style.backgroundColor = '#9896F1';

  const [show, setShow] = useState(false)

  return (
    <div className="Me">
      { show ? <MyInfo setShow={ setShow } /> : <Header setShow={ setShow } /> }
    </div>
  );
}

function MyInfo({ setShow }) {

  const infos = [
    {
      title: 'Profil🗒',
      contents: '출생: 1998.02.24.\n학력: 조선대학교 졸업(2022. 02.)',
    },
    {
      title: 'GitHub📔',
      link: 'https://github.com/seulki9802'
    },
    {
      title: 'Skills⚒️',
      contents: 'HTML/CSS, Node.js, JavaScript, React, MongoDB',
    },
    {
      title: 'LOVE🤍',
      contents: '문제를 해결 하는 것을 좋아합니다.\n 타인의 필요성을 충족하는 것을 좋아합니다.',
    },
    {
      title: 'Why WEB?🖥',
      contents: '\v 웹은 아주 매력적인 도구입니다. 타인과 쉽게 연결될 수 있으며 우리는 그들의 요구에 반응할 수 있습니다.\n\n\v 우리는 클라이언트에게 문서를 전달할 뿐 아니라 다양한 서비스를 제공하고 그들의 필요성을 충족하고 더 나아가 새로운 경험을 줄 수 있습니다.\n\n\v 저는 서버로서 다양한 클라이언트들을 만나며 그들의 필요성 충족에 도움이 되고 싶습니다. 그들의 문제에 귀 기울여 이를 해결하고 보완하도록 할 것이며 그 결과에 섬세함을 더해 클라이언트에게 보다 다채롭고 경험적인 서비스를 제공하는 웹 개발자를 꿈 꿉니다.',
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

      <img src={ me_love } alt="me" />

      <motion.ul
        className="Me-info-ul"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        {infos.map((info, index) => (
        <motion.li key={index} className="Me-info-li" variants={item}>
          <h4>{ info.title }</h4>
          {info.link? <a href={ info.link } target='_blank' rel='noopener noreferrer'>{ info.link }</a>: null }
          <p style={ { whiteSpace: 'pre-line' }}>{ info.contents }</p>
        </motion.li>
        ))}

        <button className='Me-info-back' onClick={ () => setShow(false) }>⏎</button>

      </motion.ul>
    </div>
  )

}

function Header({ setShow }) {

  return(
    <div className='Me-header'>

      
      <motion.div whileHover={{ scale: 1.15 }}>
        <img src={ me_smile } onClick={ () => setShow(true) } alt="me" />
      </motion.div>

      <h1> Who Am I?</h1>
      <motion.h4 whileHover={{ scale: 1.5 }} onClick={ () => setShow(true) }>click me!</motion.h4>
    </div>
  )

}

export default Me;