import React from 'react'

const LoanDetails = (props) => {
  return (
    <div id="loanDetails">
      <fieldset>
        <legend>Loan Details</legend>
        <label>Loan Amount:<br/>
           <input type="text" id="loanAmount" name="loanAmount" onChange={props.handleChange} placeholder="20000"/>
        </label><br/>
        <label>Interest Rate:<br/>
           <input type="text" id="interestRate" name="interestRate" onChange={props.handleChange} placeholder="7.5"/>
        </label><br/>
        <label>Length of Loan:<br/>
           <input type="text" id="loanLength" name="loanLength" onChange={props.handleChange} placeholder="60"/>
        </label><br/>
        <input id="months" type="radio" name="term" value="months" defaultChecked="checked"/>
        <label for="months">Months</label>
        <input id="years" type="radio" name="term" value="years"/>
        <label for="years">Years</label><br/><br/>
        <input type="button" id="calculate" value="Calculate"/>
      </fieldset>
    </div>
  )
}

export default LoanDetails