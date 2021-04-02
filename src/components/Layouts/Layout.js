import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import layoutCSS from './Layout.module.css';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
//PROPERTIES:
state={
    showSideDrawer: true,    
};

sideDrawerCloseHandler=()=>{
    this.setState({showSideDrawer: false });
};

sideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{
        // để bảo đảm việc bất đồng bộ state, tại state nó chỉ set lại theo chu trình cố định sẵn
        //tránh việc true/false nhảy tùm lum
        return {showSideDrawer: !prevState.showSideDrawer};
    });

};
// METHODS:
    render() {
        return (
            <Auxiliary>
                {/* <div>Toolbar, SideDrawers, Backdrop</div> */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open= {this.state.showSideDrawer}
                closed={this.sideDrawerCloseHandler}/>
                <main className={layoutCSS.content}>
                    {this.props.children}
                </main>
            </Auxiliary>

        );
    }

};
export default Layout;

// bọc bên ngoài bằng 1 div cũng được, nhưng mà bọc bằng HOC - Auxiliary đẹp hơn, 