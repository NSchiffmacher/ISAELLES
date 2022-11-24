import React, { useState } from 'react'

import './SmallBlob.css'

function SmallBlob(props) {
    const num_blobs = 8;

    const [randomBlob] = useState(Math.floor(Math.random() * num_blobs));
    const blob_name = "/images/blobs/" + randomBlob + ".svg";
    
    return (
        <div className="small_blob" style={{backgroundImage: 'url(' + blob_name + ')'}}>
            <div className="num">{props.content}</div>
        </div>
    )
}

export default SmallBlob