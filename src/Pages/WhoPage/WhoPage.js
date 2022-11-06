import React, { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import LinkButton from '../../Components/LinkButton/LinkButton';

import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

import urls from '../../urls';

import './WhoPage.css';
import '../../blobs.css';



function WhoPage() {
    const [is_phone] = useState(
      window.innerWidth < 768 ? true : false
    );

  return (
    <div id="who_page" className="who_page">
        <ScrollToTop />
        
        <NavBar />

        <h3>ISAELLES, Le club féministe de l'ISAE-SUPAERO</h3>

        <div className="who_row">
            <div className="who_col">
                <div className="who_img">
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
                <div className="who_img">
                    <img src="/images/logo_ae.png" alt="Logo AE ISAE-SUPAERO"/>
                </div>
                <div className="who_text">
                    <p>
                    L'association des élèves est le Bureau Des Élèves de l'ISAE-SUPAERO. 
Il regroupe de nombreux clubs dans des domaines très variés (Techniques, Événementiels, Sociales...)                    </p>
                </div>
            </div>

            <div className="who_col">
                <div className="who_img">
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