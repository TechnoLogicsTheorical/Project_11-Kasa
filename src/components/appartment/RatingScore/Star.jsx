import './star.css'
import React from "react";

/**
 * Sous-composant de Rating Score qui permet de gérer ou non le rempissage de l'icone
 * @param {boolean} filled Booléen permet de remplir une couleur ou non ...
 * @returns {JSX.Element} Element Icon avec un enfant SVG
 * @constructor
 */
function Star({filled = false}) {
    return (
        <div className='Star-Icon'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={filled ? '#FF6060' : "#E3E3E3"}/>
            </svg>
        </div>
    )
}

export default Star;