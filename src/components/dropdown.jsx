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
      <button className='hamburguesa'>
        <Hamburger
          toggled={open}
          toggle={setOpen}
          onClick={() => setOpen((o) => !o)}
        />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal scale-in-br'>
          <a className='close' onClick={closeModal} />
          <Menu />
        </div>
      </Popup>
    </div>
  )
}

export default Index
