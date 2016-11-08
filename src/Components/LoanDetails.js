import React from 'react'

const LoanDetails = (props) => {
  return (
    <div id="loanDetails">
      <fieldset>
        <legend>Loan Details</legend>
        <label>Loan Amount:<br/>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="20000"
          />
        </label><br/>
        <label>Interest Rate:<br/>
          <input
            type="text"
            id="interestRate"
            name="interestRate"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="7.5"/>
        </label><br/>
        <label>Length of Loan:<br/>
          <input
            type="text"
            id="loanLength"
            name="loanLength"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="60"/>
        </label><br/>
        <input id="months" type="radio" name="term" value="months" defaultChecked="checked" onClick={props.handleRadio}/>
        <label htmlFor="months">Months</label>
        <input id="years" type="radio" name="term" value="years" onClick={props.handleRadio}/>
        <label htmlFor="years">Years</label><br/><br/>
        <button onClick={props.handleClick}>Calculate</button>
      </fieldset>
    </div>
  )
}

LoanDetails.propTypes = {
  handleBlur: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleRadio: React.PropTypes.func.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

export default LoanDetails
