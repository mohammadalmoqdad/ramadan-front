import React from 'react'
import Table from 'react-bootstrap/Table'

import Div, { DivIn } from "./Tabl.styles"

export default function Tabl() {
  return (
    <Div>
      <DivIn>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 5 }).map((_, index) => (
                <th key={index}>المعايير من اسامة</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>x</td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>x</td>
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>x</td>
            </tr>
          </tbody>
        </Table>
      </DivIn>
    </Div>
  )
}
