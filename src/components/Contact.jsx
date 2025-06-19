import React from 'react'

import "../styles/contact.css"


function Contact() {
  return (


    <>

      <div className="form-section">
        <h2>Send Your Query From Here...🚀</h2>
        <form action="">



          <label htmlFor="text">Name:</label>
          <input type="text" name="text" id="text" placeholder='your name'/>

          <label htmlFor="email"> Your Email:</label>
          <input type="email" name="email" id="email" placeholder='your email' />

          <label htmlFor="message">Your Query:</label>
          <input type="textfield" name="message" id="message"  placeholder='write message'/>

          <div className="submit">
            <input id='submit' type="submit" value="submit" />
          </div>

        </form>

      </div>

    </>



  )
}

export default Contact