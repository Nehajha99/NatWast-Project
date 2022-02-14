import React, { Component } from 'react';
import './Login.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: '',
    }

    handaleChange = e => {
      this.setState({
        [e.traget.name]: e.target.value
      });
    }
  render() {
    return (
      <>
        <form class="main">
          <p class="register" align="center">Register</p>
            <input type='text'
                className='un'
                placeholder='Your Name'
                onChange={this.handaleChange}
                value = {this.state.displayName}
                name='name' />


            <input type='text'
                className='un'
                placeholder='Email'
                onChange={this.handaleChange}
                value = {this.state.displayName}
                name='email' />

            <input type='password'
                className='pass'
                placeholder='Password'
                name='password' />
            <input type="submit" className='submit' value="Submit"/>        
        </form>
      
      </>
    )
  }
}

export default Register;

