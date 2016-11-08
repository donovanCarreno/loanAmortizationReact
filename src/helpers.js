export function validateInputs(loanAmount, loanLength, interestRate) {
  loanAmount = Number(loanAmount)
  loanLength = Number(loanLength)
  interestRate = Number(interestRate)

  if (isNaN(loanAmount) || loanAmount <= 0) {
    // alert("Loan Amount must be a number greater than 0")
    return false
  }

  if (isNaN(interestRate) || interestRate < 1 || interestRate > 100) {
    // alert("Interest Rate must be a number between 1 and 100")
    return false
  }

  if (isNaN(loanLength) || loanLength <= 0) {
    // alert("Length of Loan must be a number greater than 0")
    return false
  }

  return true
}

export function calcPayment(loanAmount, loanLength, interestRate) {
  let monthlyPayment = 0
  const ratePerPeriod = interestRate / 100 / 12

  monthlyPayment = loanAmount * 
                  (ratePerPeriod * Math.pow(1 + ratePerPeriod,loanLength)) / 
                  (Math.pow(1 + ratePerPeriod, loanLength) - 1)

  // round to 2 decimal places
  monthlyPayment = Math.round(monthlyPayment * 100) / 100

  return monthlyPayment
}

export function createAmortizationSchedule(loanAmount, loanLength, interestRate, monthlyPayment) {
  loanAmount = Number(loanAmount)
  loanLength = Number(loanLength)
  interestRate = Number(interestRate)
  monthlyPayment = Number(monthlyPayment)

  let initialDetails = {
    paymentNumber: '',
    monthlyPayment: '',
    interest: '',
    principal: '',
    balance: loanAmount.toFixed(2)
  }
  let amortizationSchedule = [initialDetails]
  let balance = loanAmount
  let ratePerPeriod = interestRate / 100 / 12
  let interest = 0
  let principal = 0
  let paymentDetails = {}

  // create an array of objects, where each object has paymentNumber, monthlyPayment, interest, principal & balance properties
  for (let i = 1; i <= loanLength; i++) {
    interest = Math.round(balance * ratePerPeriod * 100) / 100; // round to 2 decimal places

    if (balance > monthlyPayment) {
      principal = monthlyPayment - interest
      balance -= principal
    }
    else {  // due to rounding the interest, final payment needs to be adjusted
      principal = balance;
      monthlyPayment = interest + principal
      balance -= principal
    }

    paymentDetails = {
      paymentNumber: i,
      monthlyPayment: monthlyPayment.toFixed(2),
      interest: interest.toFixed(2),
      principal: principal.toFixed(2),
      balance: balance.toFixed(2)
    }

    amortizationSchedule.push(paymentDetails)
  }

  return amortizationSchedule
}

export function calcPaid(amortizationSchedule, key) {
  // amortizationSchedule is an array of objects
  return (
          amortizationSchedule
            .map((obj) => Number(obj[key]))
            .reduce((accumulator, element) => (
              Math.round((accumulator + element) * 100) / 100 // round to 2 decimal places
            ))
         )
}

// comma separate a string to mimic currency values
export function commaSeparatedString(string) {
  
  if (typeof string === 'string') {
    var newString = string.split('.');

    if (newString[0].length > 3) {
      newString[0] = newString[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    return newString.join('.');
  }

  return string;
}
