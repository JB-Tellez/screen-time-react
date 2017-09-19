import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import './Login.css'
import BrandImage from '../assets/images/screentime_final.gif'

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.registerHandler = this.registerHandler.bind(this)
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
    this.props.loginHandler(this.state.family || 'Jackson', this.state.password || 'pass')
  }

  registerHandler() {
    this.props.registerHandler()
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
            <Button>Login</Button>
          ) : (
              <Button>Signup</Button>
            )
          }

          <p className="signup">If your family already registered <a className="signup-link">Login Here</a></p>


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
