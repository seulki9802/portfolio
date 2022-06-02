import { useState } from 'react';
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    },
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

function Project() {

  document.querySelector('body').style.backgroundColor = '#D59BF6';

  const [show, setShow] = useState(false);

  return(
    <div className="Project">

      {show
      ? <ProjectShow setShow={ setShow } />
      : <PorjectList setShow={ setShow }/>}

    
  </div>
  )
}

function PorjectList({ setShow }) {
  return(
    <motion.ul
    className="Project-list-container"
    variants={container}
    initial="hidden"
    animate="visible"
    >
      {['게임, 랭킹', '메모, 채팅', '커뮤니티?', '내 포트폴리오'].map((i, index) => (
        <motion.li key={index} className="Project-item" variants={item} onClick={ () => setShow(true) }>
          { i }
        </motion.li>
      ))}
    </motion.ul>
  )
}

function ProjectShow({ setShow }) {
  return(
    <motion.div className='Project-show-container' initial={{ scale: 0 }} animate={{ scale :1 }}>
      dpdpdpdpdppddppdpd
      <button className='Project-show-before'>-</button>
      <button className='Project-show-after'>+</button>
      <button className='Project-show-exit' onClick={ () => setShow(false) }>x</button>
    </motion.div>
  )
}
  
  
export default Project;
  
