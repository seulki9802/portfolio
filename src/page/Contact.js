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
          console.log(result.text);
          setAni(1);
          setSend(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Contact-sendForm'>
      <h3>Contact me</h3>

      📞 010.4630.6401<br/>
      ✉️ seulki9802@gmail.com

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br/>
        <input type="text" name="user_name" /><br/>
        <label>Email</label><br/>
        <input type="email" name="user_email" /><br/>
        <label>Message</label><br/>
        <textarea name="message" /><br/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
  
  
  export default Contact;
  