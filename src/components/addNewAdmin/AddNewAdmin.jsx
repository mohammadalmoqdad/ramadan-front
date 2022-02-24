import React from 'react'
import { TiTimes } from "react-icons/ti";
import Sidebar from "components/shared/Sidebar";
import AddNewAdmindefault, { LabelSoper,Checkboxes,Wird, InputSubmit, DivPass, FormInput, DivTxtField, Form, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./AddNewAdmin.styles"

export default function AddNewAdmin() {
  //<TiTimes/>

  return (
    <AddNewAdmindefault> 
      <DropdownDiv className='DropdownDiv'>
        <DropdownDivSelect>

          <Span>الآدمن الحاليين</Span>
        </DropdownDivSelect>

        <DropdownList className='DropdownList'>

          <DropdownListItem ><I></I>امين بسام صالح</DropdownListItem>
          <DropdownListItem value="bo"><I></I>أسامة مؤمن أبوحمدان</DropdownListItem>
          <DropdownListItem value="An"><I></I>الليدر أنس القاضي</DropdownListItem>

        </DropdownList>

      </DropdownDiv>

      <DivCenter>

        {/* <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login> */}
        <H3Login>اضافة آدمن جديد</H3Login>

        <Form>
          <DivTxtField>
            <Span />
            <FormInput type="text" placeholder='أسم المستخدم' required />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput placeholder='البريد الإلكتروني' type="email" required />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput placeholder='كلمة المرور' type="passowrd" required />
          </DivTxtField>

          <DivTxtField>
            <Span />
            <FormInput placeholder='تأكيد كلمة المرور' type="passowrd" required />
          </DivTxtField>

          <DivTxtField>
            {/* <Span /> */}
            
            <LabelSoper>هل آدمن رئيسي؟ </LabelSoper><Checkboxes  type="checkbox" />
          </DivTxtField>

          <DivPass>رسالة من الbackend </DivPass>
          <InputSubmit type="submit" value='login' >اضافة آدمن جديد</InputSubmit>

        </Form>
      </DivCenter>
      <Sidebar/>

    </AddNewAdmindefault>
  )
}
