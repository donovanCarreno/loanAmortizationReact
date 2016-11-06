import React, { Component } from 'react';
import LoanDetails from './LoanDetails'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      loanAmount: 0,
      interestRate: 0,
      loanLength: 0
    }  
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <LoanDetails handleChange={this.handleChange} />
        <h4>{this.state.loanAmount}</h4>
        <h4>{this.state.interestRate}</h4>
        <h4>{this.state.loanLength}</h4>
      </div>
    )
  }
}

export default App;
