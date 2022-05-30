import { useState } from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import me_love from '../assets/me_love.tiff'

  
function Me() {

  const [show, setShow] = useState(false)

  return (
    <div className="Me">

      { show ? <MyInfo /> : <Header setShow={ setShow } /> }

    </div>
  );
}

function MyInfo() {
  const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  const [selected, setSelected] = useState(colors[0]);
  var isSelected;

  function onMouse(e) {
    var color = e.target.id;

    if (selected == color) isSelected = true;
    else isSelected = false;

    setSelected(color)
  }

  return(
    <AnimateSharedLayout>
      <ul className='Me-ul'>
        { colors.map((color) => {
          return (
            <li
              key={ color }
              id={ color }
              className='Me-item'
              onMouseOver={ onMouse }
              style={ { backgroundColor : color } }
            >
            

              <motion.div
                layoutId='outline'
                className='Me-outline'
                initial={ false }
                animate={ { borderColor: color } }
                transition={ spring }
              >
              </motion.div>
            </li>
          )
        })}
      </ul>
    </AnimateSharedLayout>
  )
}

function Header({ setShow }) {
  function showFn() {
    setShow(true)
  }
  return(
    <>
      <img src={ me_love } alt="me" />
      <button onClick={ showFn }>Explore</button>
    </>
  )

}

export default Me;