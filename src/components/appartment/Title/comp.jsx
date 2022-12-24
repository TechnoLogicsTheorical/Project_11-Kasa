import './comp.css';
import React from "react";

function Title({title, location}) {
    return (
        <div className='Title-Container'>
            <h2 className='Title'>{title}</h2>
            <h3 className='Sub-Title'>{location}</h3>
        </div>
    )
}

export default Title;