import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <Fragment>
                    <li><Link to="/signout">Sing Out</Link></li>
                    <li><Link to="/feature">Feature</Link></li>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <li><Link to="/signup">Sign Up</Link></li >
                    <li><Link to="/signin">Sign In</Link></li>
                </Fragment>
            );
        }
    }

    render() {
        return (
            <header>
                <ul>
                    <li><Link to="/">Redux Auth</Link></li>
                    {this.renderLinks()}
                </ul>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});
export default connect(mapStateToProps)(Header);