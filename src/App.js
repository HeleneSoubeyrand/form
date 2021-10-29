import React from "react";

import NewForm from "./components/NewForm";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this) 
    this.handlePasswordChange = this.handlePasswordChange.bind(this) 
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this)   
  }

  handleEmailChange(e) {
    const regEmail = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidEmail = regEmail.test(e.target.value) 
    this.setState({ mail: e.target.value, emailIsValid: isValidEmail })
  } 

  handlePasswordChange(e) {
    const isValidPassword = e.target.value.length >= 5  
    this.setState({ password: e.target.value, passwordIsValid: isValidPassword })
  }

  handleRememberMeChange(e) {
    const { checked } = e.target
    this.setState({ rememberMe: checked })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ isSubmitted: this.state.emailIsValid && this.state.passwordIsValid  })
  }

  render() {
    return (
      <div className="container">
      <h1 className="text-center">Login</h1>
      <NewForm handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} handleRememberMeChange={this.handleRememberMeChange}  handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}
export default App;
