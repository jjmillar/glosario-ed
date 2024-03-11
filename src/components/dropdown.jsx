import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Twirl as Hamburger } from 'hamburger-react'
import Menu from './menu'
import './components.scss'

const Index = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
    <>
      <button className='hamburguesa' onClick={() => setOpen(!open)}>
        <Hamburger toggled={open} toggle={closeModal} />
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
