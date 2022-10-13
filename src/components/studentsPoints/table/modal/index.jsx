import React from 'react'
import Divv, { Divvv,InputSubmit,FormInput, Span} from "./Modals.styled"
import {DivTxtField} from '../../../shared/styles'


export default function Modals() {
  return (
    <Divv>
      <Divvv>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>
          <DivTxtField >
            <Span />
            <FormInput placeholder='ادخل رقم' type="number" required />
          </DivTxtField><br /> </td>
      ))}
      </Divvv>
      <InputSubmit type="submit" value='' >تعديل</InputSubmit>
    </Divv>
  )
}
