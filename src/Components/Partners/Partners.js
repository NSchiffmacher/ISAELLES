import React, { useState } from 'react'

import PartnerEstablishments from '../PartnerEstablishments/PartnerEstablishments';

import useAppearTransition from '../../util/useAppearTransition';

import './Partners.css';

function Partners(props) {
    // Code handling the linked appearance of the != logos
    const base_logos_style = {
        transform: 'translateY(200px)',
        opacity: '0',
        transition: 'transform 0.4s ease-out, opacity 0.5s ease-out'
    };
    let [logos_style, set_logos_style] = useState(base_logos_style);
    const base_transition_delay = 0.1;
    const transition_delay = 0.2;
    const logos_ref = useAppearTransition(() => {
        set_logos_style({...logos_style, 
            transform: 'translateY(0px)',
            opacity: '1'
        });
    }, {threshold: 0.7});

    return (
        <div ref={props.inp_ref} className="partners">
            <div className="partenaires">
                <h3 ref={ props.middle_blob_trigger }>NOS PARTENAIRES</h3>
                <div className="partners_logo" ref={ logos_ref }>
                    {[
                        { src: '/images/logo_capgemini.png', alt: 'logo capgemini' },
                        { src: '/images/logo_fondation.png', alt: 'logo fondation' },
                        { src: '/images/logo_ose.jpg',       alt: 'logo ose'}
                    ].map(({src, alt}, index) => (<div key={ "logo_partners_" + index} className="image_container" style={{...logos_style, transitionDelay: (base_transition_delay + index * transition_delay) + 's'}}><div className="partner_logo"><img className="scale-2prc" src={ src } alt={ alt } /></div></div>))}
                </div>
            </div>
            <div className="etablissements_partenaires">
                <h3>LES ETABLISSEMENTS AVEC LESQUELS NOUS TRAVAILLONS</h3>
                <PartnerEstablishments name="Collèges">
                    {[
                        'Collège Hubertine Auclerc',
                        'Collège Rosa Parks',
                        'Collège Vauquelin',
                        'Collège Antoine Pons',
                        'Collège Jolimont',
                        'Collège de Mirepoix',
                        'Collège George Sand',
                        'Collège Louis Pasteur',
                        'Collège Pierre de Fermat'
                    ]}
                </PartnerEstablishments>
                <PartnerEstablishments name="Lycées">
                    {[
                        'Lycée Raymond Naves',
                        'Lycée St Exupéry',
                        'Lycée Pierre-Paul Riquet',
                        'Lycée de Mirepoix',
                        'Lycée Déodat de Severac',
                        'Lycée Polyvalent Simone de Beauvoir',
                        'Lycée Pardailhan',
                        'Lycée Polyvalent Ernest Ferroul',
                        'Lycée Bagatelle',
                        'Lycée Toulouse-Lautrec'
                    ]}
                </PartnerEstablishments>
            </div>
        </div>
    )
}

export default Partners
