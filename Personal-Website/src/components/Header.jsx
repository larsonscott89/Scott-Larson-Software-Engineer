import Nav from './Nav'
import HeaderImg from '../assets/Header Background.png'

export default function Header() {
  return (
    <div className='header'>
      <img className='header-img' src={HeaderImg}/>
      <Nav />
    </div>
  )
}