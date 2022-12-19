import './Card.css';

import React from 'react';
import {Link} from "react-router-dom";

function CardComp({data}) {
    return (
        <Link to={`/appartment/${data.id}`} className='Card-Link'>
            <div className='Card-Content'>
                <img className='Card-Image' src={data.cover} alt={data.title} />
                <h3 className='Card-Title'>
                    {data.title}
                </h3>
            </div>
        </Link>
    );
}

export default CardComp;