import React from 'react';
import navigationItemCSS from './NavigationItem.module.css';

const navigationItem=(props_para)=>(
    <li className={navigationItemCSS.NavigationItem}>
        <a href={props_para.link } 
        className={props_para.active ? navigationItemCSS.active : null}> {props_para.children} </a>
    </li>
);
export default navigationItem;