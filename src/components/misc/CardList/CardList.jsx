import './CardList.css';
import CardComp from "./CardComp.jsx";

import React, { useEffect, useState } from 'react';

/**
 * Composant s'occupant de la gestion de la génération des données de cartes
 * @param props TODO: Gestion de la propriété à changer par rapport au parent qui doit s'occuper d'envoyer la donnée
 * @returns {JSX.Element} Renvoie un conteneur avec toutes les cartes générées
 * @constructor
 */
function CardList(props) {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        fetch('./data.json')
            .then(
                res => res.json()
            )
            .then(
                res => setDatas(res)
            )
    },[]);

    return (
        <div className='Card-List-Container'>
            {datas && datas.map(data => (
                <CardComp key={data.id} objectData={data} />
            ))}
        </div>
    );
}

export default CardList;