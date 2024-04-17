import Homephoto from '../assets/PersonalWebsite:homephoto.png'

export default function Home () {
  return(
    <div className='home-container'>
      <h1 className='full-name'> Scott Larson </h1>
      <h5 className='brand-statement'> I am a Software Engineer who has a passion for creating and developing products for the average user. My previous careers in sales and the refined fuels industry helped me to develop a strong aptitude for problem solving, critical thinking, and leadership. My curiosity for learning and passion for coding has driven me to create programs that help people in their everyday lives. </h5>
      <img className='home-photo' src={Homephoto} alt='Home Page Photo'/>
    </div>
  )
}