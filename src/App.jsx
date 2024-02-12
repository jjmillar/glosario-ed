import { info } from './assets/info'
import './App.scss'

function App() {
  return (
    <div className='wrapper'>
      <a href='#Armdrag'>imagen</a>
      {info.map((item) => {
        return (
          <section key='section' className='section'>
            {item.title && (
              <div id={item.title} key='title' className='title'>
                {item.title}
              </div>
            )}
            {item.subtitle && (
              <div id={item.subtitle} key='subtitle' className='subtitle'>
                {item.subtitle}
              </div>
            )}
            <div key='section-wrapper' className='section-wrapper'>
              <div key='content' className='content'>
                {item.content}
              </div>
              {item.images && (
                <img key='images' className='images' src={item.images} />
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default App
