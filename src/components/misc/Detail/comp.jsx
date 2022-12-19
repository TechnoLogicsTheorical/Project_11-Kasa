import './comp.css'
import Chevron from '../../../assets/Chevron.png';
import React, {useState} from 'react';

function Detail({title, children, defaultOpen = false}) {
    return (
        <details className='Detail-Card' open={defaultOpen}>
            <summary className='Detail-Card-Title'>
                {title}
                <img className='Detail-Card-Icon' src={Chevron} alt="Icone pour définir l'état d'ouverture" />
            </summary>
            <div className='Detail-Card-Content'>
                {children}
            </div>
        </details>
    );
}

export default Detail;