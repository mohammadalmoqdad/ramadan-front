import React from 'react'
import Divv, { Divvv,InputSubmit,FormInput, Span, DivTxtField } from "./Modals.styled"


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
