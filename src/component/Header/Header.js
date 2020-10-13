import React from 'react';
import logo from '../../images/logo.png'
import './../Header/Header.css'

const Header = () => {
    return (
        <div class="header">
       <img src={logo} alt=""/>
       <nav>
           <a href="/shop">Shop</a>
           <a href="/about us">About Us</a>     
           <a href="/reviewe">Reviewe</a>
           <a href="/contact">Contact</a>
       </nav>
        </div>
    );
};

export default Header;