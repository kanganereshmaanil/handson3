import React, { Component } from 'react'
import User from './component/User'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <User/>
      </div>
    )
  }
}