import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
    <div className="navbar">
        <NavLink
            to="/"
            exact
            activeStyle={{
                background: 'darkred'
            }}
            >Home</NavLink>
            <NavLink
                to="/groups"
                activeStyle={{
                    background: 'darkred'
                }}
            >Groups</NavLink>
            <NavLink
                to="/login"
                exact
                activeStyle={{
                    background: 'darkred'
                }}
            >Login</NavLink>
    </div>;

export default Navbar
