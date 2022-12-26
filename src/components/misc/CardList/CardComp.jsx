import './Card.css';

import React from 'react';
import { Link } from "react-router-dom";

function CardComp({data}) {
    return (
        <Link to={`/apartment/${data.id}`} className='Card-Link Card-Shape'>
            <img className='Card-Image' src={data.cover} alt={data.title} />
            <h3 className='Card-Title'>
                {data.title}
            </h3>
        </Link>
    );
}

export default CardComp;