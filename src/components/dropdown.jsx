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
      <Hamburger
        toggled={open}
        toggle={setOpen}
        onClick={() => setOpen((o) => !o)}
      />
        </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal'>
          <a className='close' onClick={closeModal}>
          </a>
          <Menu />
        </div>
      </Popup>
    </div>
  )
}

export default Index
