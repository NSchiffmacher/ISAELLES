import React from 'react';

import './TextWithIcon.css';

function TextWithIcon(props) {
  const onClick = (e) => {
    e.preventDefault();
    if (props.href) window.open(props.href, '_blank');
  }

  const className = props.className + " text_with_icon " + (props.href ? " text_with_icon_link" : "");

  return (
    <div style={ props.style } onClick={onClick} className={className}>
        <img className="text_with_icon_img" alt={props.children} src={props.icon} /> <span>{props.children}</span>
    </div>
  )
}

export default TextWithIcon