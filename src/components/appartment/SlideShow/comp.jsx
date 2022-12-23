import './comp.css';
import ChevronGauche from '../../../assets/ChevronSlideLeft.png';
import ChevronDroite from '../../../assets/ChevronSlideRight.png';
import React, {useState} from "react";
import Bullet from "./Bullet.jsx";
import Image from "./Image.jsx";

function SlideShow({datasPictures}) {
    const slidesImages = document.querySelectorAll('.SlideShow-Image');
    const bulletsIndication = document.querySelectorAll('.Bullet');

    const totalNumberSlides = slidesImages.length - 1;

    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlideNext = () => {
        const actualSlide = currentSlide;
        const nextSlide = (actualSlide < totalNumberSlides) ? (actualSlide + 1) : (0) ;
        setCurrentSlide(nextSlide);

        slidesImages[actualSlide].className = 'SlideShow-Image';
        bulletsIndication[actualSlide].className = 'Bullet';

        slidesImages[nextSlide].className = 'SlideShow-Image active';
        bulletsIndication[nextSlide].className = 'Bullet active';
    }

    const showSlidePrev = () => {
        const actualSlide = currentSlide;
        const nextSlide = (actualSlide > 0) ? (actualSlide - 1) : (totalNumberSlides) ;
        setCurrentSlide(nextSlide)

        slidesImages[actualSlide].className = 'SlideShow-Image';
        bulletsIndication[actualSlide].className = 'Bullet';

        slidesImages[nextSlide].className = 'SlideShow-Image active';
        bulletsIndication[nextSlide].className = 'Bullet active';
    }

    return (
        <div className='SlideShow-Container'>

            {datasPictures && datasPictures.map((picture,index) => {
                if (index === 0) {
                    return <Image active={true} key={index} source={picture} />
                }
                return <Image key={index} source={picture} />
            })}

            <div className='SlideShow-Controls'>
                <button className='Button Prev'>
                    <img onClick={showSlidePrev} src={ChevronGauche} alt="Icone de déplacement vers la Gauche" />
                </button>

                <button className='Button Next'>
                    <img onClick={showSlideNext} src={ChevronDroite} alt="Icone de déplacement vers la Droite" />
                </button>

                <div className='SlideShow-Bullets'>
                    {datasPictures && datasPictures.map((picture,index) => <Bullet key={index} currentIndex={index} />)}
                </div>
            </div>
        </div>
    )
}

export default SlideShow;