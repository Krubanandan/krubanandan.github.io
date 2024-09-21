import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='con-Main'>
        <h1 className="contact-title">Contact</h1>
        <div className='contact-content'>
            <div className="contact-detail">
                <h3>Connect With Me</h3>
                <p>I'm currently available to take on new projects <br />krubanandanks@gmail.com</p>
            </div>
            <div className="contact-forms">
                <form className='forms'>
                    <label htmlFor="">Your Name</label>
                    <input type='text' placeholder='Your Name' name='name'></input>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Your Message</label>
                    <textarea type="message" rows='8' placeholder='Enter your message' name="message"/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact