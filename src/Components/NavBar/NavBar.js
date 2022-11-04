import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';

function NavBar(){
    const navigate = useNavigate();

    function returnHome(){
        navigate('/');
    }

    return (<div className="navbar">
        <header>
            <div onClick={ returnHome } className="nav_logo">
                
            </div>
            <nav>
                <NavLink href="who">Qui sommes-nous ?</NavLink>
                <NavLink hidden_on_phone href="actions">Nos actions</NavLink>
                <NavLink hidden_on_phone href="actu">Actualités</NavLink>
                <NavLink href="contact">Nous contacter</NavLink>
            </nav>
        </header>
        <div className="header_spacer"></div>
    </div>);
}

export default NavBar;