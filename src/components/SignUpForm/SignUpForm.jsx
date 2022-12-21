import { Component } from 'react';
import { signup } from '../../utilities/users-service';

import './SignUpForm.css'

export default class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Don't want to send confirm or error properties
      const { username, password } = this.state;
      // Line where it fails (signup function)
      const user = await signup({ username, password });
      // Doesn't hit this line
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form className='suf' autoComplete="off" onSubmit={this.handleSubmit}>
            <label className='sufe'>Username</label>
            <input className='sufe sufi' type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
            <label className='sufe'>Password</label>
            <input className='sufe sufi' type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
            <label className='sufe'>Confirm</label>
            <input className='sufe sufi' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
            <button className='sufe sufb' type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}