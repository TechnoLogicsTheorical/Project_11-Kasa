import React, {useEffect, useState} from 'react';
import '../components/appartment/Appartment.css'
import Header from '../components/generics/Header/comp.jsx';
import Footer from '../components/generics/Footer/comp.jsx';

import Detail from '../components/misc/Detail/comp.jsx';
import RatingScore from '../components/appartment/RatingScore/comp.jsx';
import SlideShow from '../components/appartment/SlideShow/comp.jsx';
import Title from '../components/appartment/Title/comp.jsx';
import Profil from '../components/appartment/Profil/comp.jsx';
import Tag from '../components/appartment/Tag/comp.jsx';
import { useParams } from "react-router-dom";

function Appartment() {
    const { id } = useParams();

    const [datas, setDatas] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(
                res => res.json()
            )
            .then(
                (res) => {
                    const dataWithID = res.find(dataItem => dataItem.id === id)
                    setDatas(dataWithID);
                }
            )
    },[]);

        console.log(datas)

    return (
        <div className='App-Content'>
            <Header />

            <SlideShow datasPictures={datas && datas.pictures} />

            <div className='Appartment-Header'>
                <Title
                    title={ datas && datas.title }
                    location={ datas && datas.location }
                />
                <Profil name={datas && datas.host.name} imageProfil={datas && datas.host.picture}/>
            </div>

            <div className="Appartment-Extra">
                <div className='Tags-Container'>
                    {datas && datas.tags.map( tag => <Tag key={tag} text={tag} />)}
                </div>

                <RatingScore score={datas && datas.rating} />
            </div>

            <div className="Appartment-Details">
                <Detail
                    title='Description'
                    defaultOpen={true}
                >
                    <p>{datas && datas.description}</p>
                </Detail>

                <Detail
                    title='Equipements'
                    defaultOpen={true}
                >
                    <ul>
                        {datas && datas.equipments.map( equipment => (<li key={equipment}>{equipment}</li>))}
                    </ul>
                </Detail>
            </div>

            <Footer />
        </div>
    );
}

export default Appartment;