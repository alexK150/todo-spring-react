import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            TODO APP
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact>
                    Home
                </NavLink>
            </li>
        </ul>
    </nav>
);