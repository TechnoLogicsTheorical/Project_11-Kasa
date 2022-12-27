import './comp.css';
import React from "react";

/**
 * Composant renvoyant le contenu d'un titre et d'un sous-titre
 * @param {string} title Donnée titre de l'appartement
 * @param {string} location Donnee lieu de l'appartement
 * @returns {JSX.Element} Element HTML avec les données générées
 * @constructor
 */
function Title({title, location}) {
    return (
        <div className='Title-Container'>
            <h2 className='Title'>{title}</h2>
            <h3 className='Sub-Title'>{location}</h3>
        </div>
    )
}

export default Title;