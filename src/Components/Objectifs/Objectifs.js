import React from 'react';
import Objectif from '../Objectif/Objectif';

import './Objectifs.css';

function Objectifs(props) {
  return (
    <div ref={ props.inp_ref } className="objectifs">
        <div className="left">
            <p>
            Créé en 2015 à l’ISAE-SUPAERO, ISAELLES regroupe les hommes et les femmes de l'ISAE (étudiant-e-s, professeur-e-s, membres du personnel, intervenant-e-s, ancien-ne-s élèves) ayant le projet commun d'encourager les collégiennes et les lycéennes à s'orienter vers des études scientifiques et plus spécifiquement vers les carrières d’ingénieurs.
            </p>
            <h3>NOS OBJECTIFS</h3>
            <div className="objectifs_liste">
                <Objectif num={1}>Lutter contre les stéréotypes de genre</Objectif>                
                <Objectif num={2}>Encourager les collégiennes et les lycéennes à s'orienter vers des études scientifiques</Objectif>                
            </div>
        </div>
        <div className="right">
            <img src="/images/objectif_side.jpg" alt="side" />
        </div>
    </div>
  )
}

export default Objectifs