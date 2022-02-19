import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import AddNewAdmindefault, {AvailableDays, DivTxtFieldnumber, FormInputnumber, Label, LabelSoper, DropdownListStanderd, DropdownListItemStanderd, Checkboxes, Wird, InputSubmit, DivPass, FormInput, DivTxtField, Formm, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./EditStandards.styles"

export default function EditStandards() {

  return (
    <AddNewAdmindefault>

      <DropdownDiv className='DropdownDiv'>
        <DropdownDivSelect>

          <Span>اختر الأيام التي تريد أن يكون متاحا بها</Span>
          
        </DropdownDivSelect>

        <AvailableDays className='DropdownList'>

          <DropdownListItemStanderd>الأيام المتاحة</DropdownListItemStanderd>
          <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
          <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
          <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

        </AvailableDays>

      </DropdownDiv>

      <DivCenter>

        {/* <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login> */}
        <H3Login>تعديل معايير المسابقة</H3Login>

        <Formm>

          <DropdownListStanderd className='DropdownList'>

            <DropdownListItemStanderd>اختر اسم المعيار </DropdownListItemStanderd>
            <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

          </DropdownListStanderd>

          <DropdownListStanderd className='DropdownList'>

            <DropdownListItemStanderd>تعديل اسم العيار - مقترح</DropdownListItemStanderd>
            <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

          </DropdownListStanderd>

          <DivTxtField>
            <Span />
            <FormInput placeholder='ادخل اسم اخر - اختياري' type="text" required />
          </DivTxtField>

          <DropdownListStanderd className='DropdownList'>

            <DropdownListItemStanderd>اختر نوع النموذج</DropdownListItemStanderd>
            <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

          </DropdownListStanderd>


          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='' type="number" required />

            <Label>ادخل عدد نقاط المعيار</Label>
          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='' type="number" required  />
            <Label>عدد التكرارات المسموح بها باليوم</Label>

          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Checkboxes type="checkbox" /> <LabelSoper>هل متاح لأيام محددة؟</LabelSoper>
          </DivTxtFieldnumber>

          {/* <DivPass>رسالة من الbackend </DivPass> */}
          <InputSubmit type="submit" value='login' >تعديل المعيار</InputSubmit>

        </Formm>
      </DivCenter>

    </AddNewAdmindefault>
  )
}
