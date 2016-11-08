import React from 'react'
import TableRow from './TableRow'

const Table = (props) => {
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
        <tbody id="tableBody">
          {props.amortizationSchedule.map((details) => (
              <TableRow key={details.paymentNumber} details={details} />
            ))
          }
        </tbody>
        <tfoot id="tableFooter"></tfoot>
      </table>
    </div>
  )
}

Table.propTypes = {
  amortizationSchedule: React.PropTypes.array.isRequired
}

export default Table
