import React, { Component } from 'react';
import LoanDetails from './LoanDetails'
import Table from './Table'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      disabled: true,
      loanAmount: 0,
      interestRate: 0,
      loanLength: 0,
      monthlyPayment: 0,
      amortizationSchedule: [],
      totalPaid: 0,
      totalInterestPaid: 0
    }  
  }

  handleBlur(e) {
    console.log(e.target.value)
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
        <LoanDetails handleBlur={this.handleBlur} handleChange={this.handleChange} disabled={this.state.disabled} />
        <h2>Amortization Schedule</h2>
        <hr/>
        <Table />
      </div>
    )
  }
}

export default App;
