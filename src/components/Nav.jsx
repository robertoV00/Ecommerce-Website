import React, { useState } from 'react';
import ProductImg from '../assets/product-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './ui/Navbar';
import Menu from './ui/Menu';
import Cart from './ui/Cart';


const Nav = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
        </>


    );
}

export default Nav;
