import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactCSS from "./Contact.module.css"

function Contact(){
  const form = useRef();
  const service_id = process.env.REACT_APP_SERVICE_ID;
  const teplate_id = process.env.REACT_APP_TEMPLATE_ID;
  const key = process.env.REACT_APP_KEY;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z ]+$/;
  const textRegex = /^.{2,1000}$/s;
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidText, setIsValidText] = useState(true);

  const handleChangeName = (e) => {
    setFormData({
      ...formData,
      user_name: e.target.value
    });
    setIsValidName(nameRegex.test(e.target.value));
    setSuccess('');
  };

  const handleChangeEmail = (e) => {
    setFormData({
      ...formData,
      user_email: e.target.value
    });
    setIsValidEmail(emailRegex.test(e.target.value));
    setSuccess('');
  };

  const handleChangeText = (e) => {
    setFormData({
      ...formData,
      message: e.target.value
    });
    setIsValidText(textRegex.test(e.target.value));
    setSuccess('');
  };
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, teplate_id, form.current, key)
      .then((result) => {
        form.current.reset();
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        setSuccess('Thank you! Your message has been sent!');
        setError('')
      }, (error) => {
          setSuccess('');
          setError('Oops, it did not work!');
      });
  };

  return (
    <div id="contact" className={`${ContactCSS.container}`}>
      <h4 className={`${ContactCSS.h4}`}>CONTACT</h4>
      <form ref={form} onSubmit={sendEmail}>
        <input 
          className={isValidName===false? `${ContactCSS.inputNameError}`: `${ContactCSS.inputName}`}
          type="text" 
          name="user_name" 
          placeholder='Your name'
          value={formData.user_name} 
          onChange={handleChangeName}
        />
        <input 
          className={isValidEmail===false? `${ContactCSS.inputEmailError}`: `${ContactCSS.inputEmail}`}
          type="email" 
          name="user_email" 
          placeholder='Your email'
          value={formData.user_email} 
          onChange={handleChangeEmail}
        />
        <textarea 
          className={isValidText===false? `${ContactCSS.inputTextError}`: `${ContactCSS.inputText}`}
          name="message" 
          placeholder='Type your message here...'
          value={formData.message} 
          onChange={handleChangeText} 
        /><br></br>
        {error==='' && success === '' ? 
        (
          <h6 style={{color:"#343434"}}>.</h6>
        ):(
          <>
            <h6 className={`${ContactCSS.error}`}>{error}</h6>
            <h6 className={`${ContactCSS.success}`}>{success}</h6>
          </>
        )}

        {(isValidEmail===false ||  isValidName===false || isValidText===false || formData.user_name==='' || formData.user_email==='' || formData.message==='')? 
        (
          <input disabled type="submit" value="Send" className={`${ContactCSS.buttonDisabled}`}/>
        ):
        (
          <input type="submit" value="Send" className={`${ContactCSS.button}`}/>
        )}

        
      </form>
    </div>
  );
};

export default Contact;