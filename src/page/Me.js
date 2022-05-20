import { useState } from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
  
function Me() {

  const [items0, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  const myThings = [
    {
      title: '나의 재미',
      things: ['😮 새로운 것', '🧐 관찰하는 것', '😎 해결하는 것'],
      item: items0
    },
    {
      title: '나의 보람',
      things: ['🤲 도와주는 것', '✍️ 해결하는 것'],
      item: items1
    },
    {
      title: '나의 소망',
      things: ['👧 다양한 경험', '👩‍🦳 멋진 리더로의 성장'],
      item: items2
    }
  ]

  if (items0.length < myThings[0].things.length) {
    setTimeout(() => { setItems([...items0, myThings[0].things[items0.length]]) }, 300)
  } else if (items1.length < myThings[1].things.length) {
    setTimeout(() => { setItems1([...items1, myThings[1].things[items1.length]]) }, 300)
  } else if (items2.length < myThings[2].things.length) {
    setTimeout(() => { setItems2([...items2, myThings[2].things[items2.length]]) }, 300)
  }

  return (
    <div className="Me">

      {myThings.map((things) => {
        return(
          <div key={ things.title } className='Me-box'>
            <h2>{ things.title }</h2>
            <TransitionGroup>
              {things.item.map(( item, index ) => (
                <CSSTransition key={index} timeout={500} classNames="Me-list">
                <p>{item}</p>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        )
      })}

    </div>
  );
  }

export default Me;