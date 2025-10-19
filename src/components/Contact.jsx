import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "../styles/contact.css"


function Contact() {

  const [formData, setFormData] = useState('');

  const {


    register,
    handleSubmit,
    formState: { errors, isSubmitting }


  } = useForm();

  const onsubmit = async (data) => {

    let postData = await fetch(

      'https://localhost:3000/contact',
      {

        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)




      }




    )

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
          <input type="textfield" placeholder='write message'  {...register('message', { required: true, })} />

          <div className="submit">
            <input disabled={isSubmitting} id='submit' type="submit" value="submit" />
          </div>

        </form>

      </div>

    </>







  )
}

export default Contact