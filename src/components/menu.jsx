import { info } from '../assets/info'
import './components.scss'

function Menu () {
    return (
        <div className='menu'>
            {info.map( (item) => {
                return(
                    <>
                    {item.title && <a href={`#${item.title}`}>{item.title}</a>}
                    </>
                )
            })}
        </div>
    )
}

export default Menu

//<a href='#Armdrag'>imagen</a>

