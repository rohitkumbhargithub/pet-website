import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import scroll from '../assets/scroll.svg';

import Homepage from '../assets/Hompage.svg'
import Homepage2 from '../assets/Homepage2.svg'
import Homepage3 from '../assets/Homepage3.svg'
import Homepage4 from '../assets/Homepage4.svg'
import Homepage5 from '../assets/Homepage5.svg'

const images = [
  Homepage,
  Homepage2,
  Homepage3,
  Homepage4,
  Homepage5
]


const Home = () => {
  return (
    <>
      <div className="slide-container">
        <Fade>
          {
            images.map((each, index) => <img style={{width: "100%", height: "100vh"}} alt="" src={each} />)
          }
        </Fade>

        <img className='mt-[-2rem] ml-[5rem] cursor-pointer' style={{zIndex: "1000"}} src={scroll} alt="" width={"30px"} />
      </div>
      
    </>
  )
}

export default Home;
