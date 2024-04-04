import React, { useState, useRef } from 'react'
import Popup from 'reactjs-popup'
import './components.scss'
import { MdOutlineEdit } from 'react-icons/md'
import { IconContext } from 'react-icons'
import emailjs from '@emailjs/browser'

const Edit = () => {
  const [open, setOpen] = useState(false)
  const isOpen = () => open ? setOpen(false) : setOpen(true)

  function delay (ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
  async function close () { await delay(100); setOpen(false) }

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_fytmjbg', 'template_fbe4x2z', form.current, {
        publicKey: '2rAyQl2u0RW98YIaQ'
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
    close()
    window.alert('Mensaje enviado exitosamente para revisión')
  }
  return (
    <>
      <IconContext.Provider value={{ size: '2rem' }}>
        <button className='button' onClick={isOpen}>
          <MdOutlineEdit />
        </button>
      </IconContext.Provider>
      <Popup open={open} closeOnDocumentClick onClose={close}>
        <div className='modal scale-in-br'>
          <form ref={form} onSubmit={sendEmail} className='form'>
            <label>NOMBRE</label>
            <input id='user_name' type='text' name='user_name' className='text' autofocus='false' />
            <label>COMENTE DETALLADAMENTE LO QUE SUGUIERE MODIFICAR</label>
            <textarea name='message' />
            <input type='submit' value='Enviar' className='submit-btn' />
            <a id='link' href='https://wa.me/56972151199?text=kiubo' />
          </form>
        </div>
      </Popup>
    </>
  )
}

export default Edit
