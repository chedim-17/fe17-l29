import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../.././logo.svg';
import './header.css';

const Header = () => {

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="header__menu">
                <ul className="menu__list">
                    <li className="list__item"><NavLink to="/" className="item__link">Home</NavLink></li>
                    <li className="list__item"><Link to="/movies" className="item__link">Movies</Link></li>
                    <li className="list__item"><Link to="/about" className="item__link">About</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
