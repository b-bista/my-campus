import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

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
      <div className="form">
        
        <h1 class="h1 mb-5 font-weight-heavy"></h1>
          <form className="user" onSubmit={this.handleSubmit}>
            <img src="https://i.imgur.com/Aug55CS.png" class="logo"></img>
            <p>
            <input
              id="username"
              name="username"
              placeholder="Username"
              class="form-control"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            </p>

            <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            </p>
            <p>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </p>
        </form>
      </div>
    );
  }
}
