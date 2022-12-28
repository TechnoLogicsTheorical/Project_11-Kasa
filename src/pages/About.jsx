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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>

                <Detail title='Respect'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Detail>

                <Detail title='Service'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>

                <Detail title='Responsabilité'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>
            </div>
        </>
    );
}

export default About;