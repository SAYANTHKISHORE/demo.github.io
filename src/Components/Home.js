import React from 'react'
import Navbar from './Navbar'
import Bannerbackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={Bannerbackground} alt='' />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    YabaDabaDooo
                </h1>
                <p className='primary-text'>
                    lorem-ipsum
                </p>
                <button className='secondary-button'>
                    nOw < FiArrowRight />
                </button>
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Home