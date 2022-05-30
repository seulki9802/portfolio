import { useState } from 'react';
import { CSSTransition, Transition } from "react-transition-group";
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

  const [show, setShow] = useState([false, false, false, false])
  const [number, setNumber] = useState(0)

  const infos = [
    {
      title: '출생의 비밀',
      contents: '어쩌고 저쩍고 25살',
      show: show[0]
    },
    {
      title: '이거 조아',
      contents: '뽀짝한 거 조아 귀여운 거 조아 해결하는 거 조아~ 관찰 국ㄱ~~',
      show: show[1]
    },
    {
      title: '성장시켜줘',
      contents: '나 이런 거 잘 하니까 데꼬가',
      show: show[2]
    },
    {
      title: '보자보자',
      contents: '내가 만든 부끄러운 작품들을 봐줘..',
      show: show[3]
    },
  ]

  setTimeout(() => {

    if(number == show.length) console.log("finishe")
    else {
      var cloneShow = show;
      cloneShow[number] = true;
      setShow(cloneShow)
      setNumber(number + 1)
    }

  }, 500)

  return(
    <>
    <div className='Me-info'>

      {infos.map((info) => {

        return(
          <CSSTransition key={ info.title } in={ info.show } timeout={ 300 } classNames='Me-infoShow' unmountOnExit>
            <div>
              <h4>{ info.title }</h4>
              <p>{ info.contents }</p>
            </div>
          </CSSTransition>
        )
        
      })}


    </div>
  </>
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