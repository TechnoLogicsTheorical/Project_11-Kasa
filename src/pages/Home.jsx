import BannerImage from '../assets/BannerHome.png';
import Banner from '../components/misc/Banner/comp.jsx';
import CardList from "../components/misc/CardList/CardList.jsx";

import React from 'react';

/**
 * Composant de page d'accueil affichant les différents sous-composants de page
 * @returns {JSX.Element} Retourne un React Fragment contenant une bannière image ainsi qu'un conteneur de carte affichant les appartements ...
 * @constructor
 */
function Home() {
    return (
        <>
            <Banner>
                <img className='Banner-Image' src={BannerImage} alt='Falaise rocheux ayant en visibilité la mer en contrebat' />
                <h2 className='Banner-Title'>Chez vous, partout et ailleurs</h2>
            </Banner>

            <CardList />
        </>
    );
}

export default Home;