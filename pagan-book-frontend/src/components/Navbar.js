import React from 'react';
import ReactDOM from 'react-dom';
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
                exact
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
