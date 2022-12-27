import './comp.css';
import ChevronGauche from '../../../assets/ChevronSlideLeft.png';
import ChevronDroite from '../../../assets/ChevronSlideRight.png';

import React, { useState } from "react";

/**
 * Composant React : Carrousel d'interface permettant la gestion des images d'une location d'un appartement
 * @param picturesPath Tableau d'url ayant un nombre d'images à afficher.
 * @returns {JSX.Element} Retourne les éléments HTML en fonction des conditions et autres
 * @constructor
 */
function SlideShow({datasPictures: picturesPath}) {

    // Nombre de slide, -1 pour pouvoir afficher le bon index calculé
    const totalNumberSlides = picturesPath.length - 1;
    const [currentSlide, setCurrentSlide] = useState(0);

    /**
     * Fonction callback qui est exécutée lorsque le bouton de l'interface est cliqué pour avoir l'affichage de la photo suivante
     */
    const showSlideNext = () => {
        const actualSlide = currentSlide;
        const nextSlide = (actualSlide < totalNumberSlides) ? (actualSlide + 1) : (0);
        setCurrentSlide(nextSlide);
    }

    /**
     * Même fonction callback mais pour avoir la photo précédente
     */
    const showSlidePrev = () => {
        const actualSlide = currentSlide;
        const nextSlide = (actualSlide > 0) ? (actualSlide - 1) : (totalNumberSlides);
        setCurrentSlide(nextSlide)
    }

    return (
        <div className='SlideShow-Container'>

            <div className='SlideShow-Image active' >
                <img src={ picturesPath[currentSlide] } alt="Une image de l'appartement" />
            </div>


            { // Permet de pouvoir afficher les contrôles, seulement si-il existe plus de 1 image, sinon il n'y a aucun intérêt à les affichées
                (picturesPath.length > 1) ? (
            <div className='SlideShow-Controls'>
                <button className='Button Prev' onClick={ showSlidePrev }>
                    <img className='Button-Icon' src={ChevronGauche} alt="Icone de déplacement vers la Gauche" />
                </button>

                <button className='Button Next' onClick={ showSlideNext }>
                    <img className='Button-Icon' src={ChevronDroite} alt="Icone de déplacement vers la Droite" />
                </button>

                <div className='SlideShow-Text-Indication'>
                    <span>{ `${currentSlide + 1} / ${totalNumberSlides + 1}` }</span>
                </div>
            </div>) : null }

        </div>
    )
}

export default SlideShow;