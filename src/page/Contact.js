import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import loading from '../assets/loading.png'


function Contact() {

  document.querySelector('body').style.backgroundColor = '#EDB1F1';

  const [send, setSend] = useState(false);
  const [ani, setAni] = useState(1)

  return (
    <div className='Contact'>

      <motion.div key={ ani } initial={{ scale: ani? 0 : 1 }} animate={{ scale: ani }} >
        { send? <SendOK setSend={ setSend } />: <SendForm setSend={ setSend } setAni={ setAni } /> }
      </motion.div>

      {!send && !ani? <img src={ loading } alt='loading' />: null}

    </div>

  );
}

function SendOK({ setSend }) {
  return(
    <>
    <h2>감사합니다.</h2>
    <h3>메세지가 전달되었습니다.</h3>
    <p>빠른 시일 내로 답장 드리도록 하겠습니다.</p>
    <button onClick={ () => setSend(false) }>다른 메일 보내기</button>
    </>
  )
}

function SendForm({ setSend, setAni }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setAni(0);

    emailjs.sendForm('service_fgsbbyw', 'template_jb8hsd9', form.current, 'M4s4XNaZC9f3Y9Adq')
      .then((result) => {
        setAni(1);
        setSend(true);
      }, (error) => {
        setAni(1);
        alert('\a error! 다시 한번 시도해 주세요..')
      });
  };

  return (
    <div className='Contact-sendForm'>
      <h2>Contact me!</h2>

      저의 포트폴리오를 방문해주셔서 감사합니다! 연락을 바라신다면, 아래와 같은 수단을 통해 연락 주시면 빠른 시일 내로 답장 드리겠습니다.<br/><br/>

      <h4>연락처</h4>
      📞 010.4630.6401<br/>
      ✉️ seulki9802@gmail.com<br/><br/>

      <h4>메일 보내기</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br/>
        <input type="text" name="user_name" /><br/>
        <label>Email</label><br/>
        <input type="email" name="user_email" /><br/>
        <label>Message</label><br/>
        <textarea name="message" /><br/>
        <button type="submit">send</button>
      </form>
    </div>
  );
}
  
  
  export default Contact;
  