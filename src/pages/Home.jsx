import BannerImage from '../assets/BannerHome.png';

import React from 'react';
import Banner from '../components/misc/Banner/comp.jsx';
import CardList from "../components/misc/CardList/CardList.jsx";


function Home() {
    return (
        <>
            <Banner type='small'>
                <img className='Banner-Image' src={BannerImage} alt='Falaise rocheux ayant en visibilité la mer en contrebat' />
                <h2 className='Banner-Title'>Chez vous, partout et ailleurs</h2>
            </Banner>

            <CardList />
        </>
    );
}

export default Home;