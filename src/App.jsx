import { info } from './assets/info'
import './App.scss'

function App() {
  return (
    <div className='wrapper'>
      {info.map( (item) => {
        return (
          <section key='section' className='section'>
            <div key='title' className='title'>{item.title}</div>
            <div key='content' className='content'>{item.content}</div>
          </section>
        )
      })}
    </div>
  )
}

export default App
