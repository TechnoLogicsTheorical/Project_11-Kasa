import logo from '../../../assets/logo.png';
import './comp.css';
import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className='Header'>
            <NavLink to="/">
                <img className='Header-Logo' src={logo} alt="Logo Kasa" />
            </NavLink>
            <nav>
                <NavLink to="/" className='Header-Link'>Accueil</NavLink>
                <NavLink to="/about" className='Header-Link'>A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;