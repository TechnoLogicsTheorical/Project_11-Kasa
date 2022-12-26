import React, {useEffect, useState} from 'react';
import '../components/appartment/Appartment.css'

import Detail from '../components/misc/Detail/comp.jsx';
import RatingScore from '../components/appartment/RatingScore/comp.jsx';
import SlideShow from '../components/appartment/SlideShow/comp.jsx';
import Title from '../components/appartment/Title/comp.jsx';
import Profil from '../components/appartment/Profil/comp.jsx';
import Tag from '../components/appartment/Tag/comp.jsx';

import { useParams, useNavigate } from "react-router-dom";

function Appartment() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [datas, setDatas] = useState(null);

    async function getData(idData){
        let fetchedData = await fetch('/data.json');
        fetchedData = await fetchedData.json();

        return fetchedData.find(data => data.id === idData);
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getData(id);
            if (data) {
                setDatas(data);
            } else navigate('/error');
        }
        fetchData();
    },[id, navigate]);

    return (
        <>
            <SlideShow datasPictures={datas && datas.pictures} />

            <div className='Appartment-Header'>
                <div className="Bloc-Informations-1">
                    <Title
                        title={ datas && datas.title }
                        location={ datas && datas.location }
                    />
                    <div className='Tags-Container'>
                        {datas && datas.tags.map( tag => <Tag key={tag} text={tag} />)}
                    </div>
                </div>
                <div className="Bloc-Informations-2">
                    <div className="Appartment-Extra">
                        <Profil name={datas && datas.host.name} imageProfil={datas && datas.host.picture}/>
                        <RatingScore score={datas && datas.rating} />
                    </div>
                </div>
            </div>

            <div className="Appartment-Details">
                <Detail
                    title='Description'
                >
                    <p>{datas && datas.description}</p>
                </Detail>

                <Detail
                    title='Equipements'
                >
                    <ul>
                        {datas && datas.equipments.map( equipment => (<li className='List-Item' key={equipment}>{equipment}</li>))}
                    </ul>
                </Detail>
            </div>
        </>
    );
}

export default Appartment;