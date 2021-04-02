import React from 'react';
import modalCSS from './Modal.module.css';
import Aux from './../../../hoc/Auxiliary';
import Backdrop from './../Backdrop/Backdrop';

const modal = (props_para) => {
    return (
        <Aux>     
          <Backdrop show={props_para.show} clicked={props_para.modalClosed}/>
            <div
                className={modalCSS.Modal}
                style={{
                    transform: props_para.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props_para.show ? '1' : '0'
                }}>
                {props_para.children}
            </div>
          
        </Aux>

    );
};
export default modal;
