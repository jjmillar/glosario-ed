import { info } from '../assets/info'
import './components.scss'

function Menu () {
  return (
    <ul className='menu'>
      {info.map((item) => {
        return (
          <div key='section'>
            {item.title && <li><a href={`#${item.title}`} className='list'>{item.title}</a></li>}
            {item.layout && item.layout.map((i) => { return (<li key={i.name}><a href={`#${i.name}`} className='sub-list'>{i.name}</a></li>) })}
            {item.layout2 && item.layout2.map((i) => { return (<li key={i.name}><a href={`#${i.name}`} className='sub-list'>{i.name}</a></li>) })}
          </div>
        )
      })}
    </ul>
  )
}

export default Menu
