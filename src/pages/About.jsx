import BannerImage from '../assets/BannerAbout.png';
import Banner from "../components/misc/Banner/comp.jsx";
import Detail from "../components/misc/Detail/comp.jsx";

import React from 'react';

/**
 * Composant de page constituée des différents sous-composants de page, comme une bannière, image ...
 * @returns {JSX.Element} Retourne un React Fragment
 * @constructor
 */
function About() {
    return (
        <>
            <Banner>
                <img className='Banner-Image' src={BannerImage} alt="Paysage de plaine avec un fond Montagneux" />
            </Banner>

            <div className='Details-Container'>
                <Detail title='Fiabilité'>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Detail>

                <Detail title='Respect'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Detail>

                <Detail title='Service'>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Detail>

                <Detail title='Responsabilité'>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Detail>
            </div>
        </>
    );
}

export default About;