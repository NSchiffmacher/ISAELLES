import React from 'react'

import './Hero.css';

function Hero() {
  return (
    <div className="hero">
        <div className="hero_inner">
            <div className="hero_white_background"></div>
            <div className="hero_logo"><img src="/images/logo_isaelles.svg" alt="hero logo"/></div>
            <div className="hero_catch_phrase">
              <span className="color-deep-blue">#Sciences</span>  
              <span className="color-magenta">Deserves</span>  
              <span className="color-pink">Girls</span>  
            </div>            
        </div>
        <img src="/images/hero_banner_crop.jpg" alt="hero banner" />
    </div>
  )
}

export default Hero