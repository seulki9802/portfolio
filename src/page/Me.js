import { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import me from '../assets/me.jpeg';

function Me() {

    const [things, setThings] = useState([])

    const funThings = [
      '새로운 것',
      '관찰하는 것',
      '해결하는 것'
    ]

    const handleAddThings = () => {
      const nextHiddenThings = funThings.find((i) => !things.includes(i));
      if (nextHiddenThings) setThings((prev) => [ ...prev, nextHiddenThings])
    }

    return (
      <div className="Me">

        <div className="Me-box" onMouseOverCapture={ handleAddThings }>
          <ul>
            <h2>My Fun Things</h2>

            <TransitionGroup>
              {things.map(( i, index ) => (
                <CSSTransition key={ index } timeout={ 500 } classNames="Me-listFade">
                  <li>{ i }</li>
                </CSSTransition>
              ))}
            </TransitionGroup>

          </ul>
        </div>

        <div className="Me-box">
          나의 보람
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="Me-box">
          나의 부족
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        <div className="Me-box">
          나의 소망
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        <p>
          {/* 나의 재미<br/>
          1. 새로운 것<br/>
          2. 관찰하는 것<br/>
          3. 해결하는 것<br/>
          <br/>
          나의 보람<br/>
          1. 도와주는 것<br/>
          2. 해결하는 것<br/>
          <br/>
          나의 부족<br/>
          1. 경험<br/>
          2. 판단하는 것<br/>
          <br/>
          나의 소망<br/>
          1. 경험<br/>
          2. 리더<br/>
          <br/> */}
          
          {/* 나는 문제를 좋아한다.
          문제란 무엇인가?

          무엇인가 필요한 상황.
          해결되지 아니한 욕구가 존재한 상황.
          새로운 욕구가 생긴 상황.

          이를 해결해 주는 것을, '문제 해결' 이라고 한다.
          나는 이를 좋아한다.

          왜?
          첫째로, 문제를 관찰하고 파악하는 과정은 재밌다.
          둘째로, 나의 필요성 또는 누군가의 필요성을 충족시켜주는 것은 매우 나에게 매우 보람찬 일이다.

          따라서 나는 매번 새로운 문제가 발생하는 것을 즐긴다. */}

          {/* 안녕하십니까 해결사 유슬기입니다.<br/>
          <br/>
          저는 문제를 좋아합니다.<br/>
          문제가 무엇인가?<br/>
          <br/>
          무엇인가 필요로 하는 상황<br/>
          해결되지 아니한 욕구가 존재한 상황<br/>
          새로운 욕구가 생긴 상황<br/>
          <br/>
          이를 해결하는 것을,<br/>
          필요성을 충족시켜주는 것을<br/>
          나는 아주 좋아합니다.<br/>
          <br/>
          왜?<br/>
          첫재로, 문제를 관찰하고 파악하는 과정은 재밌습니다!<br/>
          둘째로, 나 또는 누군가의 필요성을 충족시키는 일은 저에게 매우 보람찬 일입니다.<br/>
          <br/>
          따라서 저는 매번 새로운 문제가 발생하는 것을 즐깁니다.<br/>
          그 중에서도 웹 서비스에 굉장한 흥미를 느낍니다.<br/>
          <br/>
          나는 누군가에게 쉽게 욕구를 충족시켜주길 바랍니다.<br/>
          나는 개발자이자 서비스를 제공하는 사람, 서버입니다.<br/>
          <br/>
          이러한 나는 아래와 같은 성질이 있습니다.<br/>
          섬세하고,<br/>
          꼼꼼하며,<br/>
          사려깊으며,<br/>
          관찰력이 뛰어납니다.<br/>
          <br/>
          그러나 아직 이러한 부족한 점이 있습니다.<br/>
          경험이 부족하며,<br/>
          통찰력이 부족합니다.<br/>
          <br/>
          따라서 저는 이러기를 원합니다.<br/>
          선배들을 따라가며,<br/>
          다양한 경험을 겪고,<br/>
          그 속에서 지혜를 배우며,<br/>
          멋진 리더로 성장해가길 바랍니다.<br/>
          <br/>
          이러한 저를 이끌어주실 멋진 회사와 선배들을 찾습니다.<br/>
          흥미로우셨다면, 연락주세요.<br/>
          contact me! */}


          
        </p>

      </div>
    );
  }
  
  
  export default Me;
  