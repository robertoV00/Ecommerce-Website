import React from 'react';
import NavLogo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({setCartOpen, setMenuOpen}) => {
    return (
        <nav className="nav">
                        <div className="nav__container">
                                <a href="/">
                                    <img src={NavLogo} alt="" className="nav__logo" />
                                </a>
                            <div className="nav__links">
                                <a href="/products" className="nav__link">
                                    Products
                                </a>
                                <button className="nav__cart" onClick={() => setCartOpen(true)}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="cart__length">
                                        4
                                    </span>
                                </button>
                                <button className="nav__menu" onClick={() => setMenuOpen(true)}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                        </div>
        </nav>
    );
}

export default Navbar;
