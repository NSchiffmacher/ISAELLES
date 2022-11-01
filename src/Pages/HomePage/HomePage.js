import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Objectifs from '../../Components/Objectifs/Objectifs';
import Partners from '../../Components/Partners/Partners';
import ContactsSection from '../../Components/ContactsSection/ContactsSection';

import './HomePage.css';

function HomePage(){

    return (<div id="page">
        <NavBar/>
        <Hero/>
        <Objectifs />

        <Partners />

        <ContactsSection />
    </div>);
}
export default HomePage;