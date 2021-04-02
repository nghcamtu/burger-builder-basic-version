import React from 'react';
import buttonCSS from './Button.module.css';

const button= (props_para)=>{
    return (
        <button className={ [buttonCSS.Button, buttonCSS[props_para.btnType]].join(' ') }
        onClick={props_para.clicked}> {props_para.children} </button>
    );
};

export default button;