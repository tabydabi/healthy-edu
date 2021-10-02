import React from 'react'
import { Table } from './styles'

const TableStats = () => {
  return (
    <div>
      <Table>
        <tr style={{ fontSize: '5vh', textAlign: 'left' }}>
          <th>240</th>
          <th>1.456</th>
          <th>1M+</th>
        </tr>
        <tr>
          <td>
            Qualified Doctors &<br /> Medical Specialists
          </td>
          <td>
            Medical Tests Done
            <br /> For Our Patients
          </td>
          <td>
            Years of Experience
            <br /> The Medical Field
          </td>
        </tr>
      </Table>
    </div>
  )
}

export default TableStats
