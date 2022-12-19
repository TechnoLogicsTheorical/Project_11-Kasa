import React, {useEffect, useState} from 'react';
import '../components/appartment/Appartment.css'
import Header from '../components/generics/Header/comp.jsx';
import Footer from '../components/generics/Footer/comp.jsx';

import SlideShow from '../components/appartment/SlideShow/comp.jsx';
import Title from '../components/appartment/Title/comp.jsx';
import Profil from '../components/appartment/Profil/comp.jsx';
import Tag from '../components/appartment/Tag/comp.jsx';
import {useParams} from "react-router-dom";
import {logDOM} from "@testing-library/react";

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
                    {datas && datas.tags.map( tag => <Tag text={tag} />)}
                </div>

                {/*RatingScore score=3*/}
            </div>

            <Footer />
        </div>
    );
}

export default Appartment;