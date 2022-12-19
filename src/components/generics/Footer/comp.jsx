import './comp.css';
import LogoWhite from '../../../assets/LogoWhite.png';
import React from 'react';

function Footer() {

    return (
        <footer className='Footer'>
            <img className='Footer-Logo' src={LogoWhite} alt="Logo de la marque Kasa (Blanc)" />
            <p className='Footer-Copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;