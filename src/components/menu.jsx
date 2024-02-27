import { info } from '../assets/info'
import './components.scss'

function Menu () {
    return (
        <ul className='menu'>
            {info.map( (item) => {
                return(
                    <>
                    {item.title && <li><a href={`#${item.title}`} className='list'>{item.title}</a></li>}
                    </>
                )
            })}
        </ul>
    )
}

export default Menu

//<a href='#Armdrag'>imagen</a>

