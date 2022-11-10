import React, { useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './Hero.css';

function Hero() {
	const [hero_banner_loaded, set_hero_banner_loaded] = useState(false);
	const on_hero_banner_loaded = () => {
		set_hero_banner_loaded(true);
	}
	return (
		<div className="hero">
			<div className="hero_inner">
				<div className="hero_white_background"></div>
				<div className="hero_inner_transition">
				<div className="hero_logo"><img src="/images/logo_isaelles.svg" alt="hero logo"/></div>
				<div className="hero_catch_phrase">
					<span className="color-deep-blue">#Sciences</span>  
					<span className="color-magenta">Deserves</span>  
					<span className="color-pink">Girls</span>  
				</div>            
				</div>
			</div>

			
			<img onLoad={on_hero_banner_loaded} src="/images/hero_banner_crop.jpg" alt="hero banner" style={{display: (hero_banner_loaded ? 'block' : 'none')}} />
			{ (!hero_banner_loaded) && <Skeleton width="100vw" style={{aspectRatio: 3.78, zIndex:-1}}/>}


		</div>
	)
}

export default Hero