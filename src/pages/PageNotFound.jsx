import React from 'react';
import {Link} from "react-router-dom";
import Header from "../components/generics/Header/comp.jsx";

function PageNotFound() {
    return (
        <div className='App-Content'>
            <Header />

            <div className='Error-Reason-Content'>
                <h1 className='Error-Title'>404</h1>
                <p className='Error-Text'>Oups! La page que vous demandez n'existe pas.</p>

                <Link className='Error-Link' to='/'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
}

export default PageNotFound;