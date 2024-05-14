import { useState } from 'react'
import { info } from '../assets/info'
import Popup from 'reactjs-popup'
import { Twirl as Hamburger } from 'hamburger-react'
import './components.scss'
import { editId } from '../assets/utils'

const Index = () => {
  const [open, setOpen] = useState(false)
  const isOpen = () => open ? setOpen(false) : setOpen(true)

  function delay (ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
  async function close () { await delay(100); setOpen(false) }

  return (
    <>
      <button className='button'>
        <Hamburger toggled={open} toggle={isOpen} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={close}>
        <div className='modal scale-in-br'>
          <ul className='menu'>
            {info.map((item) => {
              return (
                <div key='section'>
                  {item.title && <li><a href={`#${editId(item.title)}`} className='list' onClick={close}>{item.title}</a></li>}
                  {item.layout && item.layout.map((i) => { return (<li key={`1${i.name}`}><a href={`#${editId(i.name)}`} className='sub-list' onClick={close}>{i.name}</a></li>) })}
                  {item.layout2 && item.layout2.map((i) => { return (<li key={`2${i.name}`}><a href={`#${editId(i.name)}`} className='sub-list' onClick={close}>{i.name}</a></li>) })}
                </div>
              )
            })}
          </ul>
        </div>
      </Popup>
    </>
  )
}

export default Index
