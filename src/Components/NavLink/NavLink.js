import React from 'react';
import { useNavigate } from "react-router-dom";

import './NavLink.css';

function NavLink(props){
    const navigate = useNavigate();
    let target_url = props.href;

    
    return (<div onClick={ (e) => navigate(target_url)} className="nav_link">{ props.children }</div>);
}

export default NavLink;