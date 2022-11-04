import React from 'react'
import { useNavigate } from 'react-router-dom';

import './LinkButton.css';

function LinkButton(props) {
  const navigate = useNavigate();
  function onClick(){
    navigate(props.href);
  }

  const className = "link_button " + (props.className ? props.className : '');
  return (
        <span onClick={ onClick } className={ className }>{ props.children }</span>
  )
}

export default LinkButton