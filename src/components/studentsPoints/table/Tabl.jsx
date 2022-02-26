import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Div, { FormInput, Span, DivTxtField, InputSubmit, DivIn } from "./Tabl.styles"
import Modals from './modal/Modals'

export default function Tabl() {
  const [showdays, setshowdays] = useState('none')

  const dayOfRamdan = (e) => {
    if (showdays === 'none') {
      setshowdays('block')
    } else {
      setshowdays('none')
    }
  }
  
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
            <tr>           {/* style={{ display: addGroup }} */}
              <td>1</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}<br /> </td>
              ))}
              <td><InputSubmit type="submit" value='' onClick={dayOfRamdan} >تعديل</InputSubmit></td>


              {/* <DivTxtField style={{ display: showdays }} >
                <Span />
                <FormInput placeholder='ادخل رقم' type="number" required />
              </DivTxtField> */}

              <td>x</td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td><InputSubmit type="submit" value='' onClick={dayOfRamdan} >تعديل</InputSubmit></td>
              <td>x</td>
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td><InputSubmit type="submit" value='' onClick={dayOfRamdan} >تعديل</InputSubmit></td>
              <td>x</td>

            </tr>
          </tbody>
        </Table>
        <td style={{ display: showdays }}><Modals ></Modals></td>

      </DivIn>
    </Div>
  )
}
