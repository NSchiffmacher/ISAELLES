import React, {useState} from 'react'

import './Objectif.css';

function Objectif(props) {
    const num_blobs = 8;

    const [randomBlob] = useState(Math.floor(Math.random() * num_blobs));
    const blob_name = "/images/blobs/" + randomBlob + ".svg";

    return (
        <div className="objectif" style={ props.style }>
            <div className="blob" style={{backgroundImage: 'url(' + blob_name + ')'}}>
                <div className="num">{props.num}</div>
            </div>
            <div className="objectif_texte">
                <span>{props.children}</span>
            </div>
        </div>
    )
}

export default Objectif