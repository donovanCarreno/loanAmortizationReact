import React from 'react'
import {commaSeparatedString} from './helpers'

const TableRow = (props) => {
  const {details} = props
  return (
    <tr>
      <td>{commaSeparatedString(details.paymentNumber)}</td>
      <td>{commaSeparatedString(details.monthlyPayment)}</td>
      <td>{commaSeparatedString(details.interest)}</td>
      <td>{commaSeparatedString(details.principal)}</td>
      <td>{commaSeparatedString(details.balance)}</td>
    </tr>
  )
}

TableRow.propTypes = {
  details: React.PropTypes.object.isRequired
}

export default TableRow
