import { useState } from 'react'
import Popup from 'reactjs-popup'
import './components.scss'
import { MdOutlineEdit } from 'react-icons/md'
import { IconContext } from 'react-icons'

const Edit = () => {
  const [open, setOpen] = useState(false)
  const isOpen = () => open ? setOpen(false) : setOpen(true)

  function delay (ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
  async function close () { await delay(100); setOpen(false) }
  return (
    <>
      <IconContext.Provider value={{ size: '2rem' }}>
        <button className='button' onClick={isOpen}>
          <MdOutlineEdit />
        </button>
      </IconContext.Provider>
      <Popup open={open} closeOnDocumentClick onClose={close}>
        <div className='modal scale-in-br'>
          <ul className='menu'>
            <p>kiubo</p>
          </ul>
        </div>
      </Popup>
    </>
  )
}

export default Edit
