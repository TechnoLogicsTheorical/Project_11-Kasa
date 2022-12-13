import './CardList.css';

import React from 'react';
import CardComp from "./CardComp.jsx";

function CardList(props) {
    return (
        <div className='Card-List-Container'>
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp title={'Je teste quand meme'}/>
        </div>
    );
}

export default CardList;