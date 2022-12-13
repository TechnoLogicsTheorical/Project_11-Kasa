import logo from '../../assets/logo.png';
import './comp.css';
import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className='Header'>
            <NavLink to="/">
                <img src={logo} alt="Logo Kasa" />
            </NavLink>
            <nav>
                <NavLink to="/" className='Header-Link'>Accueil</NavLink>
                <NavLink to="/about" className='Header-Link'>A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;