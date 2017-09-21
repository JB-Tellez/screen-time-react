import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Login from './components/Login'
import Landing from './components/Landing'
import Family from './components/Family'
import Kid from './components/Kid'
import Dashboard from './components/Dashboard'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as familyActions from './actions/familyActions';
import * as authActions from './actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}



class App extends Component {

 

  constructor(props) {
    super(props)
    this.loggedIn = this.loggedIn.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.gotoLoginHandler = this.gotoLoginHandler.bind(this)
    this.logoutHandler = this.logoutHandler.bind(this)
    this.gotoRegisterHandler = this.gotoRegisterHandler.bind(this)
    this.registerHandler = this.registerHandler.bind(this)
    this.kidSelected = this.kidSelected.bind(this)
    this.brandClickHandler = this.brandClickHandler.bind(this)
  }

  getMenuProps() {
    
        return {
          loggedIn: this.loggedIn(),
          login: this.gotoLoginHandler,
          logout: this.logoutHandler,
          brandClickHandler: this.brandClickHandler,
          selectedKid: this.getSelectedKid(),
          ...this.props
        }
      }

      getSelectedKid() {

        if (this.props.family && this.props.family.selectedKidId) {
          return this.props.family.children.find( kid => kid.id === this.props.family.selectedKidId)
        }

        return null
      }

  loggedIn() {
    return this.props.auth.loggedIn
  }

  loginHandler(family, password) {
    this.props.authActions.logIn(family, password, this.props.history)
  }

  registerHandler(family, password) {
    this.props.authActions.register(family, password, this.props.history)
  }

  gotoLoginHandler() {
    this.logoutHandler()
    this.props.history.push('/login')
  }

  logoutHandler() {
    this.props.authActions.logOut()
    this.props.familyActions.clearFamily()
  }

  kidSelected(kid) {
    this.props.history.push('/kid/' + kid.id)
    this.props.familyActions.kidSelected(kid)
  }

  brandClickHandler() {
    this.props.history.push('/')
  }

  getKid(id) {
    return this.props.family && this.props.family.children.find(kid => kid.id === id)
  }

  gotoRegisterHandler() {
    this.props.history.push('/register')
  }

  getLoginProps(isLogin = true) {
    return {
      isLogin,
      errors: this.props.auth.errors,
      loginHandler: this.loginHandler,
      registerHandler: this.registerHandler,
      gotoLoginHandler: this.gotoLoginHandler,
      gotoRegisterHandler: this.gotoRegisterHandler
    }
  }

  render() {
    return (

      <main className="main-container unlock-logo jumbotron">
        <div className="stars">
          <div className="twinkling">
            <div className="App">
              <Menu {...this.getMenuProps()} />
              <Route path="/" exact component={props => <Landing gotoRegisterHandler={this.gotoRegisterHandler} />} />
              <Route path="/login" render={props => <Login {...this.getLoginProps()} {...props} />} />
              <Route path="/register" render={props => <Login {...this.getLoginProps(false)} {...props} />} />
              <PrivateRoute path="/family" authed={this.loggedIn()} component={props => <Family family={this.props.family} kidSelected={this.kidSelected} {...props} />} />
              <PrivateRoute path="/kid/:id" authed={this.loggedIn()} component={props => <Kid kid={this.getKid(props.match.params.id)} {...props} />} />
              <PrivateRoute authed={this.loggedIn()} path='/dashboard' component={props => <Dashboard family={this.props.family} familyActions={this.props.familyActions} {...props} />} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

App.propTypes = {
  familyActions: PropTypes.object,
  family: PropTypes.object,
  auth: PropTypes.object
};

function mapStateToProps(state) {
  return {
    family: state.family,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    familyActions: bindActionCreators(familyActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
