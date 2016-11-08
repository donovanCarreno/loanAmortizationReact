import React, { Component } from 'react';
import LoanDetails from './LoanDetails'
import Table from './Table'
import {validateInputs} from './helpers'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRadio = this.handleRadio.bind(this)
    this.state = {
      disabled: true,
      loanAmount: 0,
      interestRate: 0,
      loanLength: 0,
      monthlyPayment: 0,
      amortizationSchedule: [],
      totalPaid: 0,
      totalInterestPaid: 0,
      term: 'months'
    }  
  }

  handleBlur(e) {
    console.log(e.target.value)
  }

  handleChange(e) {
    e.preventDefault()
    const {loanAmount, loanLength, interestRate} = this.state
    const disabled = validateInputs(loanAmount, loanLength, interestRate)

    this.setState({
      [e.target.name]: e.target.value,
      disabled
    })
  }

  handleClick() {
    console.log('hi!')
  }

  handleRadio(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <LoanDetails
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleRadio={this.handleRadio}
          disabled={this.state.disabled} />
        <h2>Amortization Schedule</h2>
        <hr/>
        <Table />
      </div>
    )
  }
}

export default App;
