import React, { useState, useRef } from 'react'
import Popup from 'reactjs-popup'
import './components.scss'
import { MdOutlineEdit } from 'react-icons/md'
import { IconContext } from 'react-icons'

const Edit = () => {
  const [open, setOpen] = useState(false)
  const isOpen = () => open ? setOpen(false) : setOpen(true)

  function delay (ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
  async function close () { await delay(100); setOpen(false) }

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    close()
    window.alert('Funcion en construccion Q(^.^Q)')
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
            <input type='text' name='user_name' className='text' autofocus />
            <label>COMENTE DETALLADAMENTE LO QUE SUGUIERE MODIFICAR</label>
            <textarea name='message' autofocus />
            <input type='submit' value='Enviar' />
            <a id='link' href='https://wa.me/56972151199?text=kiubo' />
          </form>
        </div>
      </Popup>
    </>
  )
}

export default Edit
