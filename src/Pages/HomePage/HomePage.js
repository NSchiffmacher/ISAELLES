import React, { useRef, useEffect, useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Objectifs from '../../Components/Objectifs/Objectifs';
import Partners from '../../Components/Partners/Partners';
import ContactsSection from '../../Components/ContactsSection/ContactsSection';

import Blob from '../../Components/Blob/Blob';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

import './HomePage.css';
import '../../blobs.css';

function HomePage(){
    // Used to check if the page is loaded on phone or not
    const [is_phone] = useState(
        window.innerWidth < 768 ? true : false
    );
    
    const partners = useRef(null);
    const objectifs = useRef(null);
    const middle_blob = useRef(null);
    // Gros blob deep blue sur le coté droit, à côté de la section "Nos objectifs" et "Nos partenaires"
    useEffect(() => {
        function inner() {
            const partners_height = partners.current.offsetHeight;
            const objectifs_height = objectifs.current.offsetHeight;
            console.log(partners.current.children[0].offsetHeight);
            if (!is_phone) {
                middle_blob.current.style.height = (objectifs_height * 5 / 4 + partners_height) + 'px';
                middle_blob.current.style.marginTop = (objectifs_height/4) + 'px';
            } else {
                const partners_logo_height = partners.current.children[0].offsetHeight;
                middle_blob.current.style.height = (partners_height - partners_logo_height) + 'px';
                middle_blob.current.style.marginTop = (objectifs_height + partners_logo_height * 1.2) + 'px';
            }
        }

        // Computes these value when the page loads, and 1 second after to account for loaded images
        inner();
        setTimeout(inner, 1000);
    }, [partners, objectifs, middle_blob, is_phone]);

    return (<div id="page">
        <ScrollToTop />

        
        <NavBar/>

        <Blob className="main_top_blob" zIndex={0} src="/images/side_blobs/1.svg" />
        
        <Hero/>
        
        <Blob className="main_top_blob_2 hidden_mobile" zIndex={0} src="/images/side_blobs/2.svg" />
        <Blob inp_ref={ middle_blob } className="middle_right_blob" zIndex={0} src="/images/side_blobs/3.svg" />
        
        <Objectifs inp_ref={ objectifs }/>
        <Blob className="main_top_blob_2 only_mobile" zIndex={0} src="/images/side_blobs/2.svg" />
        <Blob className="middle_left_blob_1 hidden_mobile" zIndex={0} src="/images/side_blobs/5.svg" />

        <Partners inp_ref={ partners } />
        
        <Blob className="bottom_blob_1 hidden_mobile" zIndex={0} src="/images/side_blobs/4.svg" />
        <ContactsSection />
    </div>);
}
export default HomePage;