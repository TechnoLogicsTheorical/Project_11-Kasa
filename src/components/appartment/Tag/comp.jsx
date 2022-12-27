import './comp.css';
import React from "react";

/**
 * Composant permettant d'afficher un tag dans la page Appartement
 * @param {string} text Le texte du tag à afficher
 * @returns {JSX.Element} Element HTML générer avec le texte formater dans sa balise <div>
 * @constructor
 */
function Tag({text}) {
    return (
        <div className='Tag'>
            {text}
        </div>
    )
}

export default Tag;