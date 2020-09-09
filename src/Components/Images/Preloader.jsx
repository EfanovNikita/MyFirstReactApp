import React from 'react';
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.loadBox}>
            <div className={style.ldsDualRing}></div>
        </div>
    )
}

export default Preloader;