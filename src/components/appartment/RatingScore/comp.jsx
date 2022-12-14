import './comp.css'
import Star from './Star.jsx'
import React from "react";

/**
 * Composant de la page de l'affichage d'appartement comportant, un score de vote
 * @param {string} score Une chaine de caractère à convertir en INT
 * @returns {JSX.Element} Retourne un Conteneur et des éléments étoiles, remplis ou non remplis
 * @constructor
 */
function RatingScore({score}) {
    const ratingNumber = parseInt(score);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ratingNumber) stars.push(<Star key={i} filled={true} />);
        else stars.push(<Star key={i} />)
    }

    return (
        <div className='Stars-Container'>
            { stars }
        </div>
    )
}

export default RatingScore;