import './comp.css'
import Chevron from '../../assets/Chevron.png';
import React from 'react';

function Detail({title, children}) {
    return (
        <details className='Detail-Card'>
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