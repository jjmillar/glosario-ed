import { info } from './assets/info'
import './App.scss'
import Index from './components'
import Edit from './components/edit'
import IntroAnimation from './components/intro'
import { editId } from './assets/utils'

function App () {
  return (
    <div className='wrapper'>
      <IntroAnimation />
      <div key='button-wrapper' id='button-wrapper' className='button-wrapper'>
        <Edit />
        <Index />
      </div>
      <main className='mainIntroAnimation'>
        {info.map((item) => {
          return (
            <section key={item.title} className='section'>
              {item.title && (<div id={item.title} key='title' className='title'>{item.title}</div>)}
              {item.subtitle && (<div id={item.subtitle} key='subtitle' className='subtitle'>{item.subtitle}</div>)}
              {item.content && (<div key='content' className='content'>{item.content}</div>)}
              {item.img && <img key='image' className='image' src={item.img} />}
              {item.layout && (
                <div key='layout-wrapper' id='layout-wrapper' className='layout-wrapper'>
                  {item.layout.map((layout) => {
                    return (
                      <div key={layout.name} id={editId(layout.name)} className='layout card'>
                        {layout.img && (<img src={layout.img} alt={layout.name} className='layout-img' />)}
                        <div className='layout-content'>
                          <div className='subtitle'>{layout.name}</div>
                          <div className='layout-content'>{layout.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              {item.layout2 && (
                <div key='layout2-wrapper' id='layout2-wrapper' className='layout2-wrapper'>
                  {item.layout2.map((layout2) => {
                    return (
                      <div key={layout2.name} id={layout2.name} className='layout2 card'>
                        <div className='subtitle'>{layout2.name}:</div>
                        <div className='layout2-content'>{layout2.content}</div>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          )
        })}
      </main>
      <ul key='greetings' id='greetings' className='greetings'>
        {info[info.length - 1].greetings.map((i) => {
          return (
            <li key={i} id={i} className='greetings--item'>{i}</li>
          )
        })}
      </ul>
      <div key='background' id='background' className='background'>
        <img src='/LogoED.svg' alt='logo elemental dojo' />
      </div>
    </div>
  )
}

export default App
