import Logo from '../../../assets/logo.png';
import './comp.css';

import React from 'react';
import { NavLink } from "react-router-dom";

/**
 * Composant destiné à l'affichage du haut de page avec une gestion de navigation
 * @returns {JSX.Element} Affiche le logo, avec une barre de navigation contenant des liens
 * @constructor
 */
function Header() {
    return (
        <header className='Header'>
            <NavLink to="/">
                <img className='Header-Logo' src={Logo} alt="Logo Kasa" />
            </NavLink>
            <nav>
                <NavLink to="/" className='Header-Link'>Accueil</NavLink>
                <NavLink to="/about" className='Header-Link'>A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;