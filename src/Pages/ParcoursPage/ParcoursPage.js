import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

// import useIsPhone from '../../util/useIsPhone';

import './ParcoursPage.css';

function ParcoursPage() {
    // const is_phone = useIsPhone();


    return (
        <div id="news_page" className="page news_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Parcours Campus au Féminin</Subtitle>
        </div>
    );
}

export default ParcoursPage