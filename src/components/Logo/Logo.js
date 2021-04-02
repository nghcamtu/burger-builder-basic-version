import React from 'react';
import burgerLogo from './../../assets/images/28.1 burger-logo.png';
import logoCSS from './Logo.module.css';

const logo=(props_para) =>{
    return (
        // custom height của Logo component tùy theo component cha gọi
        <div className={logoCSS.Logo} style={{height: "props_para.heightWeDefined",} }>
            <img src={burgerLogo} alt="My burger"/>
        </div>
    );
};
export default logo;