import React, { useState } from 'react'
import useIsPhone from '../../util/useIsPhone';

import './SmallBlob.css'

function SmallBlob(props) {
    const num_blobs = 8;
    const is_phone = useIsPhone();

    const [randomBlob] = useState(Math.floor(Math.random() * num_blobs));
    const blob_name = "/images/blobs/" + randomBlob + ".svg";
    
    return (
        <div className="small_blob" style={{backgroundImage: 'url(' + blob_name + ')', aspectRatio: (is_phone ? '1' : '')}}>
            <div className="num">{ props.children }</div>
        </div>
    )
}

export default SmallBlob