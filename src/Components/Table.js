import React from 'react'
import TableRow from './TableRow'
import {commaSeparatedString} from '../helpers'

const Table = (props) => {
  let footer = null

  if (props.amortizationSchedule.length > 0) {
    footer = (
      <tr>
        <td></td>
        <td>{commaSeparatedString(props.totalPaid.toString())}</td>
        <td>{commaSeparatedString(props.totalInterestPaid.toString())}</td>
        <td></td>
        <td></td>
      </tr>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Payment</th>
            <th>Amount</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {props.amortizationSchedule.map((details) => (
              <TableRow key={details.paymentNumber} details={details} />
            ))
          }
        </tbody>
        <tfoot>
          {footer}
        </tfoot>
      </table>
    </div>
  )
}

Table.propTypes = {
  amortizationSchedule: React.PropTypes.array.isRequired,
  totalPaid: React.PropTypes.number.isRequired,
  totalInterestPaid: React.PropTypes.number.isRequired
}

export default Table
