import Headshot from '../assets/Personal Website.png'

export default function AboutMe () {
  return (
    <div>
      <h1>About Me</h1>
      <img className='headshot' src={Headshot} alt='Headshot'/>
    </div>
  )
}