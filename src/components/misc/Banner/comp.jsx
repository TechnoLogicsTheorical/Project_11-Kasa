import './comp.css'

/**
 * Composant réutilisable, permettant d'afficher une bannière avec une image et au besoin accompagnée d'un texte
 * @param {HTMLElement} content Contenu à partir des enfants associées
 * @returns {JSX.Element} Renvoie une Bannière HTML formatée avec un conteneur
 * @constructor
 */
function Banner({children: content}) {
    return (
        <div className='Banner'>
            {content}
        </div>
    )
}

export default Banner;