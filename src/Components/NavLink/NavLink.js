import React from 'react';

import './NavLink.css';

function NavLink(props){
    
    return (<div onClick={ (e) => alert("hi")} className="nav_link">{ props.children }</div>);
}

export default NavLink;