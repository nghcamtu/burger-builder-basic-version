import React from 'react';
import navigationItemsCSS from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems=(props_para)=>(
    <ul className={navigationItemsCSS.NavigationItems}>
      <NavigationItem link="/" active> Burger Builder</NavigationItem>
      <NavigationItem link="/"> Checkout</NavigationItem>
    </ul>
);
export default navigationItems;