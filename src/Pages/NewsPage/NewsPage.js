import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

// import useIsPhone from '../../util/useIsPhone';

import './NewsPage.css';

function NewsPage() {
    // const is_phone = useIsPhone();


    return (
        <div id="news_page" className="page news_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Actualités</Subtitle>
        </div>
    );
}

export default NewsPage