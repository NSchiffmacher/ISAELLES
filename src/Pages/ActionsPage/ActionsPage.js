import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

// import useIsPhone from '../../util/useIsPhone';

import './ActionsPage.css';

function ActionsPage() {
    // const is_phone = useIsPhone();


    return (
        <div id="who_page" className="page who_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Nos actions</Subtitle>
        </div>
    );
}

export default ActionsPage