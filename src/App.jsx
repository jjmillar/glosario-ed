import { info } from './assets/info'
import './App.scss'

function App() {
  return (
    <div className='wrapper'>
      {info.map((item) => {
        return (
          <section key='section' className='section'>
            <div key='title' className='title'>
              {item.title}
            </div>
              <div key='subtitle' className='subtitle'>
                {item.subtitle}
              </div>
            <div key='section-wrapper' className='section-wrapper'>
              <div key='content' className='content'>
                {item.content}
              </div>
              <img key='images' className='images' src={item.images} />
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default App
