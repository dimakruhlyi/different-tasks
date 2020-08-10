import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper green darken-4">
                <NavLink to="/" className="brand-logo right">Yalantis Users</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/">Users</NavLink></li>
                    <li><NavLink to="/months">Months</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}