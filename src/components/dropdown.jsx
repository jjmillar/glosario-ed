import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Twirl as Hamburger } from 'hamburger-react'
import Menu from './menu'
import './components.scss'

const Index = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
    <div>
      <div className='hamburguesa'>
        <Hamburger onToggle={toggled => { toggled ? setOpen(true) : setOpen(false) }} />
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal scale-in-br'>
          <Menu />
        </div>
      </Popup>
    </div>
  )
}

export default Index
