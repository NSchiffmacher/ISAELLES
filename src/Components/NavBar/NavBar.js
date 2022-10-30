import React from 'react';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

function NavBar(){

    return (<header>
        <div className="nav_logo">
            
        </div>
        <nav>
            <NavLink>Qui sommes-nous ?</NavLink>
            <NavLink>Nos actions</NavLink>
            <NavLink>Actualités</NavLink>
            <NavLink>Nous contacter</NavLink>
        </nav>
    </header>);
}

export default NavBar;