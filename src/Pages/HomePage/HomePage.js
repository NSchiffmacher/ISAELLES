import React, { useRef, useEffect, useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Objectifs from '../../Components/Objectifs/Objectifs';
import Partners from '../../Components/Partners/Partners';
import ContactsSection from '../../Components/ContactsSection/ContactsSection';

import Blob from '../../Components/Blob/Blob';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

import useIsPhone from '../../util/useIsPhone';
import useAppearTransition from '../../util/useAppearTransition';

import './HomePage.css';
import '../../blobs.css';

function HomePage(){
    // Used to check if the page is loaded on phone or not
    const is_phone = useIsPhone();
    
    const partners = useRef(null);
    const objectifs = useRef(null);
    const middle_blob = useRef(null);

    // Animation for the pink blob in the bottom left
    const [contact_blob_style, set_contact_blob_style] = useState({
        transform: 'translateX(-200px) scale(0.4)',
        opacity: 0,
        transition: 'transform 0.4s ease-out, opacity 0.5s ease-out'
    });
    const contact_blob_ref = useAppearTransition(() => {
        set_contact_blob_style({
            ...contact_blob_style,
            transform: 'translateX(-1px)',
            opacity: 1
        });
    }, {threshold: 0.01});

    // Animation for in big blob in the middle right
    const [middle_blob_style, set_middle_blob] = useState({
        transform: 'translateX(200px)',
        opacity: 0,
        transition: 'transform 0.4s ease-out, opacity 0.5s ease-out',
        transitionDelay: '0.2s'
    });
    const middle_blob_trigger = useAppearTransition(() => {
        set_middle_blob({
            ...contact_blob_style,
            transform: 'translateX(-1px)',
            opacity: 1
        });
    }, {threshold: 0.01});

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
        <Blob style={ middle_blob_style } inp_ref={ middle_blob } className="middle_right_blob" zIndex={0} src="/images/side_blobs/3.svg" />
        
        <Objectifs inp_ref={ objectifs }/>
        <Blob className="main_top_blob_2 only_mobile" zIndex={0} src="/images/side_blobs/2.svg" />
        <Blob className="middle_left_blob_1 hidden_mobile" zIndex={0} src="/images/side_blobs/5.svg" />

        <Partners inp_ref={ partners } middle_blob_trigger={ middle_blob_trigger }/>
        

        <Blob style={ contact_blob_style } className="bottom_blob_1 hidden_mobile" zIndex={0} src="/images/side_blobs/4.svg" />
        <ContactsSection title_ref={ contact_blob_ref } />
    </div>);
}
export default HomePage;