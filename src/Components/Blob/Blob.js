import React from 'react';

import './Blob.css';

function Blob(props){
    const className = "blob_xyz " + (props.className ? " " + props.className : "");
    return (
        <div style={{ zIndex : props.zIndex }} className={ className }>
            <img className="blob_image" style={ props.style} src={props.src} alt="" />
        </div>
    );
}

export default Blob;