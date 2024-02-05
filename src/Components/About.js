import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt='' />
        </div>
        <div className='about-section-text-container'>
            <h1 className='primary-heading'> write some content here </h1>

            <p className='primart-text'>lorem-ipsum</p>
            <p className='primart-text'> lorem-ipsum 2</p>

            <div className='about-button-container'>
                <button className='secondary-button'> Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> bitch Watch video</button>
            </div>

        </div>
    </div>

    
    
  )
}

export default About