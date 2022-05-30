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
      title: '출생의 비밀',
      contents: '어쩌고 저쩍고 25살',
    },
    {
      title: '이거 조아',
      contents: '뽀짝한 거 조아 귀여운 거 조아 해결하는 거 조아~ 관찰 국ㄱ~~',
    },
    {
      title: '성장시켜줘',
      contents: '나 이런 거 잘 하니까 데꼬가',
    },
    {
      title: '보자보자',
      contents: '내가 만든 부끄러운 작품들을 봐줘..',
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
          <p>{ info.contents }</p>
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
        <img src={ me_love } alt="me" />
      </motion.div>

      <p>나에대해 알아볼램!?</p>
      <button onClick={ () => setShow(true) }>GO</button>
    </div>
  )

}

export default Me;