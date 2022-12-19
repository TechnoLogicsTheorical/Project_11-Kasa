import BannerImage from '../assets/BannerHome.png';

import React from 'react';
import Header from '../components/generics/Header/comp.jsx';
import Banner from '../components/misc/Banner/comp.jsx';
import CardList from "../components/misc/CardList/CardList.jsx";
import Footer from "../components/generics/Footer/comp.jsx";


function Home() {
    return (
        <div className='App-Content'>
            <Header />

            <Banner type='small'>
                <img className='Banner-Image' src={BannerImage} alt='Falaise rocheux ayant en visibilité la mer en contrebat' />
                <h2 className='Banner-Title'>Chez vous, partout et ailleurs</h2>
            </Banner>

            <CardList />

            <Footer />
        </div>
    );
}

export default Home;