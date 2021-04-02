import React from 'react';
import drawerToggleCSS from './DrawerToggle.module.css';

const drawerToggle=(props_para)=>{
    return(
        <div className={drawerToggleCSS.DrawerToggle} onClick={props_para.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;