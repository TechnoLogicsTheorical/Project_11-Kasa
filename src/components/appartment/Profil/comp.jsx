import './comp.css'
import React from "react";

function Profil({name, imageProfil}) {

    return (
        <div className='Profil-Container'>
            <h3 className='Profil-Name'>{name}</h3>
            <img className='Profil-Avatar' src={imageProfil} alt={''} />
        </div>
    )
}

export default Profil;