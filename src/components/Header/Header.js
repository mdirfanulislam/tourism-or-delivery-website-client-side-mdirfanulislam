import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/review">Place Detail</NavLink>
                {user.email && <span style={{ color: 'white', fontWeight: 'bold' }}> {user.displayName} </span>}
                {
                    user.email ?
                        <button className="bg-primary border border-1 border-dark rounded-3 text-white fw-bold" onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;