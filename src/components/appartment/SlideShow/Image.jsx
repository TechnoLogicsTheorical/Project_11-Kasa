import './Image.css';
import React from 'react';

function Image({source, active}) {
    return (
        <div className={'SlideShow-Image ' && active ? 'SlideShow-Image active' : 'SlideShow-Image'} >
            <img src={source} alt="Image de l'appartement" />
        </div>
    )
}

export default Image;