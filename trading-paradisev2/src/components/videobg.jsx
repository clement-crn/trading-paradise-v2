import React from 'react'
import './videobg.css'
import videoBg from './videobg.mp4'

import { Link } from 'react-router-dom'

const Videobg = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Commencez votre aventure</h1>
            <Link to='/page2'>Nous rejoindre</Link>
        </div>
        <footer>
        Video by Tima Miroshnichenko: https://www.pexels.com/video/financial-market-7579577/
        </footer>
    </div>
  )
}

export default Videobg





//