import './Bullet.css';
import React from "react";

function Bullet({currentIndex, emitCallback}) {
    function handleBullet() {
        emitCallback(currentIndex);
    }
    return (
        <button className='Bullet' onClick={handleBullet}></button>
    )
}

export default Bullet;