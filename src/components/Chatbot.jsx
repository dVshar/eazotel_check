import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import '../style/chatbot.css'

const Chatbot = () => {

  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
  const [active, setActive] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  }

  const handleClose = () => {
    setActive(false);
  }
  const handleOpen = () => {
    setActive(true);
  }


  return (
    <div className={active ? 'chatbot-div-2' : 'chatbot-div-1'} >

      <div class={active ? "cardi" : "invisible"}>
        <div className='close-div'>
          <MdOutlineClose onClick={handleClose} />
        </div>
        <span class="title">Please fill out the form below and we will get back to you as soon as possible</span>
        <form class="formi"   onSubmit={handleSubmit(onSubmit)}>
          
          <div class="group">
            <input placeholder="" type="text"
            {...register('Name', {
              required: {
                value: true,
                message: 'Name is required'
              }
            })} />
            <label for="name">Name</label>
          </div>

          <div class="group">
            <input placeholder="" type="email" id="email" name="email" 
             {...register('Email', {
              required: {
                value: true,
                message: 'Email is required'
              }
            })} />
            <label for="email">Email</label>
          </div>
          <div class="group">
            <textarea placeholder="" id="comment" name="comment" rows="5" required=""
             {...register('Message', {
              required: {
                value: true,
                message: 'Message is required'
              }
            })}> </textarea>
            <label for="comment">Comment</label>
          </div>
          <div className='chatform-btn-div'>
            <button type="submit" id='chatform-btn'> Submit</button>
          </div>
        </form>
      </div>



      <div className={active ? 'invisible' : ''}>
        <Button variant='success' onClick={handleOpen} id='chat-btn' >Send Message</Button>
      </div>
    </div>
  )
}

export default Chatbot
