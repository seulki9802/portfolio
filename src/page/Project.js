import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

  return(
    <div className="Project">

      <motion.ul
      className="Project-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3].map((i, index) => (
        <motion.li key={index} className="Project-item" variants={item}>
          { i }
        </motion.li>
      ))}
    </motion.ul>
    
  </div>
  )
}
  
  
export default Project;
  
