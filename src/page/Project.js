import { motion } from "framer-motion";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Project() {
  
  document.querySelector('body').style.backgroundColor = '#D59BF6';

  return(
    <div className="Project">

      <motion.ul
      className="Project-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {['게임, 랭킹', '메모, 채팅', '커뮤니티?', '내 포트폴리오'].map((i, index) => (
        <motion.li key={index} className="Project-item" variants={item}>
          { i }
        </motion.li>
      ))}
    </motion.ul>
    
  </div>
  )
}
  
  
export default Project;
  
