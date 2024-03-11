import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Twirl as Hamburger } from 'hamburger-react'
import Menu from './menu'
import './components.scss'

const Index = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const openModal = () => setOpen(true)
  const isOpen = () => { open ? closeModal() : openModal() }

  return (
    <>
      <button className='hamburguesa' onClick={() => isOpen}>
        <Hamburger toggled={open} toggle={isOpen} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal scale-in-br'>
          <Menu />
        </div>
      </Popup>
    </>
  )
}

export default Index
