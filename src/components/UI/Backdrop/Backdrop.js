import React from 'react';
import backdropCSS from './Backdrop.module.css';

const backdrop=(props_para)=>{
    return (
        props_para.show ? <div className={backdropCSS.Backdrop} onClick={props_para.clicked}></div> : null
    );
};
export default backdrop;
