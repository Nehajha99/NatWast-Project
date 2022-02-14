

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: '',
    }
  render() {
    return (
      <>
        <form class="main">

            <p class="sign" align="center">Sign in</p>
            <input type='text'
                className='un'
                placeholder='Email'
                name='email' />

            <input type='password'
                className='pass'
                placeholder='Password'
                name='password' />
            <input type="submit" className='submit' value="submit"/>        
        </form>
      </>
    )
  }
}

export default Login;

