import './comp.css';
import ChevronGauche from '../../../assets/ChevronSlideLeft.png';
import ChevronDroite from '../../../assets/ChevronSlideRight.png';
import React, {useState} from "react";
import Bullet from "./Bullet.jsx";
import Image from "./Image.jsx";

function SlideShow({datasPictures}) {
    const slidesImages = document.querySelectorAll('.SlideShow-Image');
    const bulletsIndication = document.querySelectorAll('.Bullet');

    const slidesNumber = slidesImages.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlideNext = () => {
        console.log(currentSlide)
        slidesImages[currentSlide].classList.remove('active');
        bulletsIndication[currentSlide].classList.remove('active');
        if (currentSlide < slidesNumber - 1) {
            setCurrentSlide(currentSlide + 1)
        } else {
            setCurrentSlide(0);
        }

        slidesImages[currentSlide].classList.add('active');
        bulletsIndication[currentSlide].classList.add('active');
    }

    const showSlidePrev = () => {
        slidesImages[currentSlide].classList.remove('active');
        bulletsIndication[currentSlide].classList.remove('active');
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(slidesNumber - 1);
        }

        slidesImages[currentSlide].classList.add('active');
        bulletsIndication[currentSlide].classList.add('active');
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