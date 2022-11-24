import React from 'react'

import NavBar from '../../Components/NavBar/NavBar';
import Subtitle from '../../Components/Subtitle/Subtitle';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

// import useIsPhone from '../../util/useIsPhone';

import './ContactPage.css';

function ContactPage() {
    // const is_phone = useIsPhone();


    return (
        <div id="contact_page" className="page contact_page">
            <ScrollToTop />
            
            <NavBar />
            <Subtitle>Nous contacter</Subtitle>
        </div>
    );
}

export default ContactPage