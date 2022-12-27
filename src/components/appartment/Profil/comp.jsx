import './comp.css'
import React from "react";

/**
 * Composant de l'appartement affichant le nom et prénom ainsi que la photo de profil
 * @param {string} name Nom complet du gérant de location
 * @param {string} imageProfil L'URL de la photo de profil
 * @returns {JSX.Element} Retourne un conteneur d'élément HTML avec titre h3 et img
 * @constructor
 */
function Profil({name, imageProfil}) {
    return (
        <div className='Profil-Container'>
            <h3 className='Profil-Name'>{name}</h3>
            <img className='Profil-Avatar' src={imageProfil} alt={''} />
        </div>
    )
}

export default Profil;