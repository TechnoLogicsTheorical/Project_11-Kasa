import './Card.css';

import React from 'react';
import { Link } from "react-router-dom";

/**
 * Composant d'affichage de carte pour le conteneur parent CardList
 * @param {object} objectData - L'élément de données à afficher.
 * @param {string} objectData.id - L'identifiant de l'élément de données.
 * @param {string} objectData.cover - L'URL de la couverture de l'élément de données.
 * @param {string} objectData.title - Le titre de l'élément de données.
 * @returns {JSX.Element}
 * @constructor
 */
function CardComp({objectData}) {
    const {id, cover, title} = objectData;
    return (
        <Link to={`/apartment/${id}`} className='Card-Link Card-Shape'>
            <img className='Card-Image' src={cover} alt={title} />
            <h3 className='Card-Title'>
                {title}
            </h3>
        </Link>
    )
}

export default CardComp;