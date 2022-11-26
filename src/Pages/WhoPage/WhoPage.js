import React, { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import LinkButton from '../../Components/LinkButton/LinkButton';
import Subtitle from '../../Components/Subtitle/Subtitle';

import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

import urls from '../../urls';
import useIsPhone from '../../util/useIsPhone';
import useAppearTransition from '../../util/useAppearTransition';

import './WhoPage.css';
import '../../blobs.css';



function WhoPage() {
    const is_phone = useIsPhone();

    const [logo_style, set_logo_style] = useState({
        transform: 'translateY(70px) scale(0.5)',
        opacity: 0,
        transition: 'transform 0.4s ease-out, opacity 0.5s ease-out'
    });
    const base_logo_delay = 0.2;
    const logo_delay = 0.175;
    const logo_trigger_ref = useAppearTransition(() => {
        set_logo_style({
            ...logo_style,
            transform: 'translateY(0px)',
            opacity: 1
        });
    }, {threshold: 0.1});

  return (
    <div id="who_page" className="page who_page">
        <ScrollToTop />
        
        <NavBar />
        <Subtitle>Qui sommes-nous ?</Subtitle>

        <h3 ref={ logo_trigger_ref }>ISAELLES, Le club féministe de l'ISAE-SUPAERO</h3>

        <div className="who_row">
            <div className="who_col">
                <div className="who_img" style={{ ...logo_style, transitionDelay: (base_logo_delay + 0 * logo_delay) + 's' }}>
                    { is_phone 
                        ? <img src="/images/logo_sup.png" alt="Logo ISAELLES"/>
                        : <img src="/images/logo_sup_square.png" alt="Logo ISAELLES"/>
                    }
                </div>
                <div className="who_text">
                    <p className="phone_margin_top">
                    L’ISAE-SUPAERO est le leader mondial de l’enseignement supérieur dans le domaine de l’ingénierie aérospatiale.
                    </p>
                </div>
            </div>

            <div className="who_col">
                <div className="who_img" style={{ ...logo_style, transitionDelay: (base_logo_delay + 1 * logo_delay) + 's' }}>
                    <img src="/images/logo_ae.png" alt="Logo AE ISAE-SUPAERO"/>
                </div>
                <div className="who_text">
                    <p>
                    L'association des élèves est le Bureau Des Élèves de l'ISAE-SUPAERO. 
Il regroupe de nombreux clubs dans des domaines très variés (Techniques, Événementiels, Sociales...)                    </p>
                </div>
            </div>

            <div className="who_col">
                <div className="who_img" style={{ ...logo_style, transitionDelay: (base_logo_delay + 2 * logo_delay) + 's' }}>
                    <img src="/images/logo_isaelles.svg" alt="Logo ISAELLES"/>
                </div>
                <div className="who_text">
                    <p className="phone_margin_top">
                    Fondé en 2015, le club ISAELLES crée du lien entre collégiennes - lycéennes et étudiant-e-s de l'Institut.
Le club a pour but d'encourager les jeunes filles à s'orienter vers des études scientifiques et de casser les barrières mentales qu'elles peuvent avoir.                    </p>
                </div>
            </div>
        </div>

        { is_phone ? 
        <div style={{ display: 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <LinkButton href={ urls.HOME_PAGE } className="who_home" >Retour à la page principale</LinkButton>
        </div>
        : ''}
    </div>
  )
}

export default WhoPage