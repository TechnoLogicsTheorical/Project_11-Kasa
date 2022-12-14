import React from 'react';
import Header from "../components/Header/comp.jsx";
import Banner from "../components/Banner/comp.jsx";
import BannerImage from '../assets/BannerAbout.png';
import Detail from "../components/Detail/comp.jsx";

function About(props) {
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
        </div>
    );
}

export default About;