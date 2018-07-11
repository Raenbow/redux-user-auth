import React from 'react';
import NavContainer from './nav_container';
import {NavLink} from 'react-router-dom';

export default props => {
    return(
        <NavContainer>
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/secret-list" className="nav-link">Secret List</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/movie-quote" className="nav-link">Movie Quote</NavLink>
            </li>
        </NavContainer>
    );
}