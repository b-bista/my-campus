import React, { Component } from "react";
import './Login.css';
//import FontAwesome from 'react-fontawesome';
//import faStyles from 'font-awesome/css/font-awesome.css';

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: "",
        loginErrors: ""
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      const { username, password } = this.state;
    }

    render() {
      return (
        <div class="form">
            <form class="user" onSubmit={this.handleSubmit}>
              <a id="pic"><img src="https://i.imgur.com/Aug55CS.png" class="logo"></img></a>
              <p class="space">
              <label class="label">Username</label>
              <input
                name="username"
                placeholder="Username"
                class="input is-success is-rounded is-fullwidth"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                required>
                </input>
              </p>
              <p class="space">
              <input
                name="password"
                placeholder="Password"
                class="input is-rounded" 
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              </p>
              <p class="space">
              <button class="button is-link is-medium is-overlay is-rounded is-centered" type="submit">Login</button>
              </p>
          </form>
        </div>
      );
    }
    }
