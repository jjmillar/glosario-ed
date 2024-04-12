import { useSpring, animated } from '@react-spring/web'
import './components.scss'

function IntroAnimation () {
  const introProps = useSpring({
    opacity: 0, // Start with opacity 0
    from: { opacity: 1 }, // Animate from opacity 1
    delay: 3000
  })

  return (
    <animated.div style={introProps}>
      <div className='intro__wrapper'>
        <div className='intro__text'>PROGRAMA DE ESTUDIO TÉCNICO</div>
        <div className='intro__text'>ELEMENTAL DOJO Y FILIALES</div>
        <div className='intro__img--wrapper'>
          <img src='/LogoED.svg' alt='elemental dojo logo' />
        </div>
      </div>
    </animated.div>
  )
}

export default IntroAnimation
