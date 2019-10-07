import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import {signUp} from '../actions';
import { connect } from "react-redux";

class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  onSubmit = (event) => {
    event.preventDefault()
    console.log('on submit of sufc',this.state.email);
    this.props.signUp(this.state.email , this.state.password, this.state.name)
    
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { signUp })(SignUpFormContainer)
