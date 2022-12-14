import React from 'react'

import SmallBlob from '../SmallBlob/SmallBlob';

import './Objectif.css';

function Objectif(props) {
    return (
        <div className="objectif" style={ props.style }>
            <SmallBlob>{ props.num }</SmallBlob>
            <div className="objectif_texte">
                <span>{props.children}</span>
            </div>
        </div>
    )
}

export default Objectif