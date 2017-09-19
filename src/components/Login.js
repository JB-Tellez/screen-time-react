import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import './Login.css'
import BrandImage from '../assets/images/screentime_final.gif'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.gotoRegisterHandler = this.gotoRegisterHandler.bind(this)
    this.gotoLoginHandler = this.gotoLoginHandler.bind(this)
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.state = {
      family: '',
      password: '',
      status: ''
    }
  }

  inputChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler(event) {
    event.preventDefault()

    if (this.props.isLogin) {
      this.props.loginHandler(this.state.family || 'Jackson', this.state.password || 'pass')
    } else {
      this.props.registerHandler(this.state.family, this.state.password)
    }
    
  }

  gotoRegisterHandler() {
    this.props.gotoRegisterHandler()
  }

  gotoLoginHandler() {
    this.props.gotoLoginHandler()
  }

  render() {
    return (

      <div className="Login">
        <img src={BrandImage} alt="screen time logo" className="img-responsive" />
        <Form onSubmit={this.submitHandler}>

          <FormGroup>
            <Input type="text" name="family" id="family" placeholder="Name" onChange={this.inputChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password" placeholder="Password" onChange={this.inputChangeHandler} />
          </FormGroup>

          {this.props.isLogin ? (

            <div>
              <Button>Login</Button>
              <p className="signup">If your family is not registered <a onClick={this.gotoRegisterHandler} className="signup-link">Sign Up Here</a></p>
            </div>

          ) : (
            <div>
              <Button>Signup</Button>
              <p className="signup">If your family is already registered <a onClick={this.gotoLoginHandler} className="signup-link">Log In Here</a></p>
            </div>
            )
          }



          {this.props.errors === 'problem' &&
            <FormGroup color="warning">
              <FormFeedback>Whoops, problem logging in.</FormFeedback>
            </FormGroup>
          }


        </Form>
      </div>
    )
  }
}
