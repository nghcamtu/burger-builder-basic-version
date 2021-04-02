import React from 'react';
import buildControlCSS from './BuildControl.module.css';

const buildControl=(props_para)=>{
    return (
        <div className={buildControlCSS.BuildControl}>
            <div className={buildControlCSS.Label}>{props_para.label}</div>
            <button className={buildControlCSS.Less} onClick={props_para.removed} disabled={props_para.disabled}>Less -</button>
            <button className={buildControlCSS.More} onClick={props_para.added}>More +</button>
        </div>
        );
};
export default buildControl;