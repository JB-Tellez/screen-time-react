import PropTypes from 'prop-types';
import React from 'react';
import './Menu.css'
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Logo from '../assets/images/xs-screentime-logo.png'


export default class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    logout() {
        this.props.logout()
    }

    login() {
        this.props.login()
    }

    render() {

        return (

            <div className="Menu">
                <Navbar className="navbar-dark bg-dark">
                    <NavbarBrand href="/">
                        <img src={Logo} alt="screentime logo" className="logo-navbar-landing" />
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {this.props.loggedIn ? (
                                <Button className="login-btn" onClick={this.logout}>Log out</Button>
                            ) : (
                                    <Button className="login-btn" onClick={this.login}>Log in</Button>
                            )}
                        </NavItem>

                        {/* {this.props.family &&
                            <NavItem>
                                {this.props.family.selectedKidId}
                            </NavItem>
                        } */}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

/* TODO Navbar for kids home
            <div>


                
                { this.props.loggedIn ? (
                    <Button onClick={this.logout.bind(this)}>Log out</Button>
                 ) : (
                     <Button onClick={this.login.bind(this)}>Log in</Button>
                 )} 

                 
                 <Countup initialCount={33}/> 
            </div>
*/

Menu.propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
};