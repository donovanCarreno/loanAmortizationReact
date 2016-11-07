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
          <TableRow />
        </tbody>
        <tfoot id="tableFooter"></tfoot>
      </table>
    </div>
  )
}

export default Table