import React from 'react'

import './Subtitle.css'

function Subtitle(props) {
  return (
    <div className="subtitle_banner">
        <div className="subtitle">{ props.children }</div>
    </div>
  )
}

export default Subtitle