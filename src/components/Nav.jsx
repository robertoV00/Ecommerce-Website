import React from 'react';
import ProductImg from '../assets/product-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './ui/Navbar';
import Menu from './ui/Menu';
import Cart from './ui/Cart';


const Nav = () => {
    return (
        <>
            <Navbar />
            <Menu />
            <Cart />
        </>


    );
}

export default Nav;
