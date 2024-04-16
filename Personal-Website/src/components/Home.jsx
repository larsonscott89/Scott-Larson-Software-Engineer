import Homephoto from '../assets/PersonalWebsite:homephoto.png'

export default function Home () {
  return(
    <div>
      <h1>Home</h1>
      <img className='homephoto' src={Homephoto} alt='Home Page Photo'/>
    </div>
  )
}