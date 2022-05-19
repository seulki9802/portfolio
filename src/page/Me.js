import { useState } from 'react';
import { motion } from 'framer-motion'
// import me from '../assets/me.jpeg';

function Me() {

  const [show, setShow] = useState([0, 0, 0, 0])

  function showList(e) {
    var clonseShow = Array.from(show)
    clonseShow[e.target.id] = 1;
    setShow(clonseShow)
  }

  const myThings = [
    {
      title: '나의 재미',
      things: ['새로운 것', '관찰하는 것', '해결하는 것'],
      show: 0
    },
    {
      title: '나의 보람',
      things: ['도와주는 것', '해결하는 것'],
      show: 0
    },
    {
      title: '나의 부족',
      things: ['경험의 부족', '판단하는 것'],
      show: 0
    },
    {
      title: '나의 소망',
      things: ['다양한 경험', '멋진 리더로의 성장'],
      show: 0
    }
  ]

  return (
    <div className="Me">

      {myThings.map((things, index) => {
        return(
          <div key={ index } id={ index } className="Me-box" onMouseMove={ showList }>
            
            { things.title }

            <motion.ul
              variants={{
                hidden: { opacity: 1, scale: 0 },
                visible: {
                  opacity: show[index],
                  scale: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >

              {things.things.map((i, index2) => (

              <motion.li
                key={ index2 }
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: show[index]
                  }
                }}>

                  { i }

              </motion.li>
              
              ))}
            </motion.ul>
          </div>
        )
      })}


    </div>
  );
}
  
  
  export default Me;
  