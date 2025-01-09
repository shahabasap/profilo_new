
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { links } from '../constants'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0  items-center'>
            {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href={links.linkedIn}><FaLinkedin /></a> 
            <a href={links.Github}><FaGithub /></a>
            <a href={links.Instagram}><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
