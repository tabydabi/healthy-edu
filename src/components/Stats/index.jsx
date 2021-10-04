import React from 'react'
import { BigText, Table } from './styles'

const TableStats = () => {
  return (
    <div>
      <Table>
        <BigText>
          <th>240</th>
          <th>1.456</th>
          <th>1M+</th>
        </BigText>
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
