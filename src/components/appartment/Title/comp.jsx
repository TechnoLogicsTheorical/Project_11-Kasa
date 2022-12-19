import './comp.css';
import React from "react";

function Title({title, location}) {
    return (
        <div className='Title-Container'>
            <h2 className='Title-Lvl1'>{title}</h2>
            <h3 className='Title-Lvl2'>{location}</h3>
        </div>
    )
}

export default Title;