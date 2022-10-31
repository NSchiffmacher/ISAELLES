import React from 'react';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

function NavBar(){

    return (<div className="navbar">
        <header>
            <div className="nav_logo">
                
            </div>
            <nav>
                <NavLink href="who">Qui sommes-nous ?</NavLink>
                <NavLink>Nos actions</NavLink>
                <NavLink>Actualités</NavLink>
                <NavLink>Nous contacter</NavLink>
            </nav>
        </header>
        <div className="header_spacer"></div>
    </div>);
}

export default NavBar;