import React from 'react'
import Divv, { FormInput, Span, DivTxtField } from "./Modals.styled"


export default function Modals() {
  return (
    <Divv>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>
          <DivTxtField >
            <Span />
            <FormInput placeholder='ادخل رقم' type="number" required />
          </DivTxtField><br /> </td>
      ))}
    </Divv>
  )
}
