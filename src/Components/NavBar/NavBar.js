import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavLink from '../NavLink/NavLink';

import './NavBar.css';
import urls from '../../urls';

function NavBar(){
    const navigate = useNavigate();

    function returnHome(){
        navigate(urls.HOME_PAGE);
    }

    return (<div className="navbar">
        <header>
            <div onClick={ returnHome } className="nav_logo">
                
            </div>
            <nav>
                <NavLink href={ urls.WHO_PAGE }>Qui sommes-nous ?</NavLink>
                <NavLink href={ urls.ACTIONS_PAGE } hidden_on_phone>Nos actions</NavLink>
                <NavLink href={ urls.NEWS_PAGE } hidden_on_phone>Actualités</NavLink>
                <NavLink href={ urls.CONTACT_PAGE }>Nous contacter</NavLink>
            </nav>
        </header>
        <div className="header_spacer"></div>
    </div>);
}

export default NavBar;