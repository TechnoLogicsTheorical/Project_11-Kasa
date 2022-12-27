import LogoWhite from '../../../assets/LogoWhite.png';
import './comp.css';

import React from 'react';

/**
 * Composant destinée à l'affichage du pied de page
 * @returns {JSX.Element} Un élément HTML contenant une image et un texte de copyright
 * @constructor
 */
function Footer() {
    return (
        <footer className='Footer'>
            <img className='Footer-Logo' src={LogoWhite} alt="Logo de la marque Kasa (Blanc)" />
            <p className='Footer-Copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;