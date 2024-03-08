import { info } from './assets/info'
import './App.scss'
import Index from './components/dropdown'

function App () {
  return (
    <div className='wrapper'>
      <Index />
      {info.map((item) => {
        return (
          <section key='section' className='section'>
            {item.title && (<div id={item.title} key='title' className='title'>{item.title}</div>)}
            {item.subtitle && (<div id={item.subtitle} key='subtitle' className='subtitle'>{item.subtitle}</div>)}
            {item.content && (<div key='content' className='content'>{item.content}</div>)}
            {item.img && <img key='image' className='image' src={item.img} />}
            {item.layout && (
              <div key='layout-wrapper' id='layout-wrapper' className='layout-wrapper'>
                {item.layout.map((layout) => {
                  return (
                    <div key={layout.name} id={layout.name} className='layout'>
                      <div key={layout.name} className='layout-content'>
                        <div className='subtitle'>{layout.name}</div>
                        <div>{layout.content}</div>
                      </div>
                      {layout.img && (<img src={layout.img} alt={layout.name} className='layout-img' />)}
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
                      <div key={layout2.name} className='subtitle'>{layout2.name}:</div>
                      <div key={layout2.name} className='layout2-content'>{layout2.content}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        )
      })}
      <div key='background' id='background' className='background'>
        <img src='/LogoED.svg' alt='logo elemental dojo' />
      </div>
    </div>
  )
}

export default App
