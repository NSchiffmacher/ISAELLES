import React, {useState} from 'react'

import './Objectif.css';

function Objectif(props) {
    const [rotateAngle] = useState(Math.floor(Math.random() * 360));

    return (
        <div className="objectif">
            <div className="blob" style={{transform: 'rotate(' + rotateAngle + 'deg)'}}>
                <div className="num" style={{transform: 'rotate(' + (-rotateAngle) + 'deg)'}}>{props.num}</div>
            </div>
            <div className="objectif_texte">
                <span>{props.children}</span>
            </div>
        </div>
    )
}

export default Objectif