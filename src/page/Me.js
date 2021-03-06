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
      title: 'Profil๐',
      contents: '์ถ์: 1998.02.24.\nํ๋ ฅ: ์กฐ์ ๋ํ๊ต ์กธ์(2022. 02.)',
    },
    {
      title: 'GitHub๐',
      link: 'https://github.com/seulki9802'
    },
    {
      title: 'Skillsโ๏ธ',
      contents: 'HTML/CSS, Node.js, JavaScript, React, MongoDB',
    },
    {
      title: 'LOVE๐ค',
      contents: '๋ฌธ์ ๋ฅผ ํด๊ฒฐ ํ๋ ๊ฒ์ ์ข์ํฉ๋๋ค.\n ํ์ธ์ ํ์์ฑ์ ์ถฉ์กฑํ๋ ๊ฒ์ ์ข์ํฉ๋๋ค.',
    },
    {
      title: 'Why WEB?๐ฅ',
      contents: '\v ์น์ ์์ฃผ ๋งค๋ ฅ์ ์ธ ๋๊ตฌ์๋๋ค. ํ์ธ๊ณผ ์ฝ๊ฒ ์ฐ๊ฒฐ๋  ์ ์์ผ๋ฉฐ ์ฐ๋ฆฌ๋ ๊ทธ๋ค์ ์๊ตฌ์ ๋ฐ์ํ  ์ ์์ต๋๋ค.\n\n\v ์ฐ๋ฆฌ๋ ํด๋ผ์ด์ธํธ์๊ฒ ๋ฌธ์๋ฅผ ์ ๋ฌํ  ๋ฟ ์๋๋ผ ๋ค์ํ ์๋น์ค๋ฅผ ์ ๊ณตํ๊ณ  ๊ทธ๋ค์ ํ์์ฑ์ ์ถฉ์กฑํ๊ณ  ๋ ๋์๊ฐ ์๋ก์ด ๊ฒฝํ์ ์ค ์ ์์ต๋๋ค.\n\n\v ์ ๋ ์๋ฒ๋ก์ ๋ค์ํ ํด๋ผ์ด์ธํธ๋ค์ ๋ง๋๋ฉฐ ๊ทธ๋ค์ ํ์์ฑ ์ถฉ์กฑ์ ๋์์ด ๋๊ณ  ์ถ์ต๋๋ค. ๊ทธ๋ค์ ๋ฌธ์ ์ ๊ท ๊ธฐ์ธ์ฌ ์ด๋ฅผ ํด๊ฒฐํ๊ณ  ๋ณด์ํ๋๋ก ํ  ๊ฒ์ด๋ฉฐ ๊ทธ ๊ฒฐ๊ณผ์ ์ฌ์ธํจ์ ๋ํด ํด๋ผ์ด์ธํธ์๊ฒ ๋ณด๋ค ๋ค์ฑ๋กญ๊ณ  ๊ฒฝํ์ ์ธ ์๋น์ค๋ฅผ ์ ๊ณตํ๋ ์น ๊ฐ๋ฐ์๋ฅผ ๊ฟ ๊ฟ๋๋ค.',
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

        <button className='Me-info-back' onClick={ () => setShow(false) }>โ</button>

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