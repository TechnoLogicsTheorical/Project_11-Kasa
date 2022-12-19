import React from 'react';
import Header from "../components/generics/Header/comp.jsx";
import Footer from "../components/generics/Footer/comp.jsx";

import BannerImage from '../assets/BannerAbout.png';
import Banner from "../components/misc/Banner/comp.jsx";
import Detail from "../components/misc/Detail/comp.jsx";

function About() {
    return (
        <div className='App-Content'>
            <Header />

            <Banner type='small'>
                <img className='Banner-Image' src={BannerImage} alt="Paysage de plaine avec un fond Montagneux" />
            </Banner>

            <div className='Details-Container'>
                <Detail title='Fiabilité'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>

                <Detail title='Respect' defaultOpen={true}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Detail>

                <Detail title='Service'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>

                <Detail title='Responsabilité'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, deleniti fuga iste labore mollitia quae ratione rem sunt voluptas voluptatibus!
                </Detail>
            </div>

            <Footer />
        </div>
    );
}

export default About;