import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Twirl as Hamburger } from 'hamburger-react'
import Menu from './menu'
import './components.scss'

const Index = () => {
  const [open, setOpen] = useState(false)
  const isOpen = () => open ? setOpen(false) : setOpen(true)

  function delay (ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
  async function close () { await delay(100); setOpen(false) }

  return (
    <>
      <button className='hamburguesa'>
        <Hamburger toggled={open} toggle={isOpen} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={close}>
        <div className='modal scale-in-br'>
          <Menu />
        </div>
      </Popup>
    </>
  )
}

export default Index
