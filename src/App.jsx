import { info } from './assets/info'
import './App.scss'
//<a href='#Armdrag'>imagen</a>
function App() {
  return (
    <div className='wrapper'>
      {info.map((item) => {
        return (
          <section key='section' className='section'>
            {item.title && (<div id={item.title} key='title' className='title'>{item.title}</div>)}
            {item.subtitle && (<div id={item.subtitle} key='subtitle' className='subtitle'>{item.subtitle}</div>)}
            {item.content && (<div key='content' className='content'>{item.content}</div>)}
            {item.grips &&  (
            <div key='grips' id='grips' className='grips-wrapper'>
                {
                  item.grips.map((g) => {
                    return (
                      <div key={g.grip} id={g.grip} className='grip'>
                        <div key={g.grip} id={g.grip} className='grip-content'> 
                          <div className='subtitle'>{g.grip}</div>
                          <div>{g.gripContent}</div>
                        </div>
                        <img src={g.img} alt={g.grip} className='grip-img' />
                      </div>
                    )
                  })
                }
            </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

export default App
