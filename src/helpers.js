export function validateInputs(loanAmount, loanLength, interestRate) {
  loanAmount = Number(loanAmount)
  loanLength = Number(loanLength)
  interestRate = Number(interestRate)

  if (isNaN(loanAmount) || loanAmount <= 0) {
    // alert("Loan Amount must be a number greater than 0")
    return true
  }

  if (isNaN(interestRate) || interestRate < 1 || interestRate > 100) {
    // alert("Interest Rate must be a number between 1 and 100")
    return true
  }

  if (isNaN(loanLength) || loanLength <= 0) {
    // alert("Length of Loan must be a number greater than 0")
    return true
  }

  return false

  // calc number of months if loan length given in years
  // if ($("years").checked) {
  //   loanLength *= 12;
  // }
}