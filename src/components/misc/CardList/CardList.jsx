import './CardList.css';

import React, {useEffect, useState} from 'react';
import CardComp from "./CardComp.jsx";

function CardList(props) {
    const [datas, setDatas] = useState(null);

    useEffect(()=>{
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
                <CardComp key={data.id} data={data} />
            ))}
        </div>
    );
}

export default CardList;