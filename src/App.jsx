import { info } from './assets/info'
import './App.scss'
//<a href='#Armdrag'>imagen</a>
function App() {
  return (
    <div className='wrapper'>
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
                <div>{item.content}</div>
              </div>
              {item.images && (
                <img key='images' className='images' src={item.images} />
              )}
              {item.definition && (
                <div key='definition' className='definition'>{item.definition}</div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default App
