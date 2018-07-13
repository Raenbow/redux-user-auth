import React, {Component} from 'react';
import NavContainer from './nav_container';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../actions';

class Nav extends Component {

    render(){
        return(
            <NavContainer>
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/not-secret-list" className="nav-link">Not Secret List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/secret-list" className="nav-link">Secret List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/movie-quote" className="nav-link">Movie Quote</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
                </li>
            </NavContainer>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    };
}

export default withRouter(connect(mapStateToProps, {signIn: signIn, signOut: signOut})(Nav));
//export default connect(mapStateToProps, {signIn, signOut})(Nav);