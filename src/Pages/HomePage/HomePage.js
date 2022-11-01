import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Objectifs from '../../Components/Objectifs/Objectifs';
import Partners from '../../Components/Partners/Partners';
import ContactsSection from '../../Components/ContactsSection/ContactsSection';

import Blob from '../../Components/Blob/Blob';

import './HomePage.css';
import '../../blobs.css';

function HomePage(){

    return (<div id="page">
        <NavBar/>

        {/* <Blob className="main_top_blob" zIndex={0} src="/images/side_blobs/1.svg" /> */}
        <Hero/>
        <Objectifs />

        <Partners />

        <ContactsSection />
    </div>);
}
export default HomePage;