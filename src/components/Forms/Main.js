import React, { Component } from 'react'
import './Main.css'
import Login from "/home/neha/Desktop/natwest_project/project2/src/components/Forms/Login.js"
import Register from '/home/neha/Desktop/natwest_project/project2/src/components/Forms/Register.js'

export  default class Main extends Component {


  state = {
    user: 1,
    loading: true,
    formSwitcher: false
  }

  //  when user click on button formSwitcher start work
  formSwitcher = (action) => {
    console.log(action)
    this.setState({
      formSwitcher: action === "register" ? true : false
    })
  }

  render() {

    const form = !this.state.formSwitcher ? <Login /> : <Register />

    return (
      <>
        <div className='mainBlock'>
          {form}
          {!this.state.formSwitcher ?
            (<span className='underLine'>
              Not Registered? <button 
              onClick = {()=> this.formSwitcher(!this.state.formSwitcher ? "register" : "login")} 
              className='linkBtn'>Create an account </button>
            </span>):

            (<span className='underLine'>
            Have an account? <button 
            onClick = {()=> this.formSwitcher(!this.state.formSwitcher ? "register" : "login")} 
            className='linkBtn'>Sign in here </button>
            </span>)
          }
        </div> 
      </>
    )
  }
}

