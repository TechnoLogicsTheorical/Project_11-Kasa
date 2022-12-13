import './Card.css';

import React from 'react';

function CardComp({title = 'Titre de la location'}) {
    return (
        <div className='Card'>
            <h3 className='Card-Title'>
                {title}
            </h3>
        </div>
    );
}

export default CardComp;