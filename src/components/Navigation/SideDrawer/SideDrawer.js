import React from 'react';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import sideDrawerCSS from './SideDrawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Auxiliary';

const sideDrawer = (props_para) => {
    // cho animation
    let attachedClasses= [sideDrawerCSS.SideDrawer, sideDrawerCSS.Close];
    if(props_para.open){ //nếu backdrop open (tức là props_para.open ==true)
        attachedClasses= [sideDrawerCSS.SideDrawer, sideDrawerCSS.Open];
    }
    return (
        <Aux>   
        {/* backdrop nhận thao tác click (clicked prop) từ SideDrawer */}
            <Backdrop show={props_para.open} clicked={props_para.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* custom height của Logo component tùy theo component cha gọi */}
                {/* C1:  */}
                {/* <Logo heightWeDefined="11%"/> */}
                {/* C2: */}
                {/* <div className={sideDrawerCSS.Logo}>
                    <Logo/>
                </div> */}

                <div className={sideDrawerCSS.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};
export default sideDrawer;
//SideDrawer chèn ở layout