import './comp.css'
import Chevron from '../../../assets/Chevron.png';

import React from 'react';

/**
 * Composant d'affichage permettant de créer un élément des informations détaillées
 * @param {string} title Le titre affiché dans l'encadrée avec un bouton
 * @param {boolean} defaultOpen Permet de changer l'état d'ouverture de la boîte encadrée
 * @param {HTMLCollection} content Contenu des enfants affichées dans le conteneur 'Detail-Card-Content'
 * @returns {JSX.Element} Retourne un élément HTML details contenant ses enfants
 * @constructor
 */
function Detail({title, children: content, defaultOpen = false}) {
    return (
        <details className='Detail-Card' open={defaultOpen}>
            <summary className='Detail-Card-Title'>
                {title}
                <img className='Detail-Card-Icon' src={Chevron} alt="Icone pour définir l'état d'ouverture" />
            </summary>
            <div className='Detail-Card-Content'>
                {content}
            </div>
        </details>
    );
}

export default Detail;