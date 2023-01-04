import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/generics/Header/comp.jsx';
import Footer from '../components/generics/Footer/comp.jsx';

/**
 * Composant de page visant à afficher la page d'erreur !
 * @returns {JSX.Element} Retourne un React Fragment avec un conteneur Error-Reason-Content
 * @constructor
 */
function PageNotFound() {
    return (
        <div className="App-Content">
            <Header />
            <div className="Error-Reason-Content">
                <h1 className="Error-Title">404</h1>
                <p className="Error-Text">Oups! La page que vous demandez n'existe pas.</p>

                <Link className="Error-Link" to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
        </div>
    );
}

export default PageNotFound;