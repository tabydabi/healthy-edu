import React from 'react'

const TableStats = () => {
  return (
    <div>
      <table
        border="0"
        style={{
          borderSpacing: '6vh 1vh',
          marginBlockStart: '9.7vh',
          marginLeft: '-5.4vh',
        }}>
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
      </table>
    </div>
  )
}

export default TableStats
