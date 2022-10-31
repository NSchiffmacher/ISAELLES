import React from 'react';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

function NavBar(){

    return (<div className="navbar">
        <header>
            <div className="nav_logo">
                
            </div>
            <nav>
                <NavLink hidden_on_phone href="who">Qui sommes-nous ?</NavLink>
                <NavLink hidden_on_phone href="actions">Nos actions</NavLink>
                <NavLink href="actu">Actualités</NavLink>
                <NavLink href="contact">Nous contacter</NavLink>
            </nav>
        </header>
        <div className="header_spacer"></div>
    </div>);
}

export default NavBar;