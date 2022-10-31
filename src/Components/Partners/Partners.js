import React from 'react'

import PartnerEstablishments from '../PartnerEstablishments/PartnerEstablishments';

import './Partners.css';

function Partners() {
  return (
    <div className="partners">
        <div className="partenaires">
            <h3>NOS PARTENAIRES</h3>
            <div className="partners_logo">
                <div className="image_container"><div className="partner_logo"><img className="scale-2prc" src="/images/logo_capgemini.png" alt="logo capgemini" /></div></div>
                <div className="image_container"><div className="partner_logo"><img className="scale-2prc" src="/images/logo_fondation.svg" alt="logo fondation isae-supaero" /></div></div>
                <div className="image_container"><div className="partner_logo"><img className="scale-2prc" src="/images/logo_ose.jpeg" alt="logo ose isae" /></div></div>
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