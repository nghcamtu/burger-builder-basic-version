import React from 'react';
import toolbarCSS from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar=(props_para)=>{
// mấy cái tên class, cuối cùng sẽ trả về string 
    return (    
        <header className={toolbarCSS.Toolbar}>
            {/* <div>MENU</div> */}
            {/* <div>LOGO</div> */}
            {/* <nav>
                ...
            </nav> */}
            <DrawerToggle clicked={props_para.drawerToggleClicked}/>
            <div className={toolbarCSS.Logo}>
                <Logo/>
            </div>
            
            <nav className={toolbarCSS.DesktopOnly}> 
                <NavigationItems/> 
            </nav>
                      
        </header>
    );
};
export default toolbar;