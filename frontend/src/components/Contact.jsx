import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "../styles/contact.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {



  const {


    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,


  } = useForm();

  const onsubmit = async (data) => {


    await fetch(

      'http://localhost:9000',
      {

        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)




      })
      .then(response => {
        if (!response.ok) {

          throw new Error(`HTTP error! Status: ${response.status}`);

        }

        return response.json(); // Parse JSON response

      })
      .then(result => {

        toast.success('Message sent successfully!');
        reset(); // Reset the form after successful submission

      })
      .catch(error => {

        toast.error('Failed to send message');

      });




  }

  return (


    <>

      <div className="form-section">
        <h2> Let's Discuss About Your idea</h2>
        <form onSubmit={handleSubmit(onsubmit)}>

          {isSubmitting && <span>form submitting</span>}

          <label htmlFor="text">Name</label>
          <input type="text" placeholder='your  name' {...register('name', { required: { value: true, message: "field is required" }, minLength: { value: 4, message: 'minimum lenght is 4' } })} />
          {errors.name && <span className=' text-red-600'>{errors.name.message}</span>}

          <label htmlFor="email"> Your Email</label>
          <input type="email" placeholder='email'  {...register('email', { required: { value: true, message: "Email is required" } })} />
          {errors.email && <span>{errors.email.message}</span>}


          <label htmlFor="message">Message</label>
          <textarea id='message' placeholder='write message'  {...register('message', { required: true, })} />

          <div className="submit">
            <input disabled={isSubmitting} id='submit' type="submit" value="submit" />
          </div>

        </form>

        <ToastContainer position='top-right' autoClose={2000} />
      </div>

    </>







  )
}

export default Contact