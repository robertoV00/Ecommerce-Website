import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <nav className="menu">
                        <button className="menu__close">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="menu__links">
                            <a href="/" className="menu__link">Home</a>
                            <a href="/" className="menu__link">Products</a>
                            <button className="menu__link menu__cart">Cart</button>
                        </div>
        </nav>
    );
}

export default Menu;
