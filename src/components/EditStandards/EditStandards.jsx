import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import AddNewAdmindefault, { Td , Th, Table , Tr, Tbody, Thead , AvailableDays, DivTxtFieldnumber, FormInputnumber, Label, LabelSoper, DropdownListStanderd, DropdownListItemStanderd, Checkboxes, Wird, InputSubmit, DivPass, FormInput, DivTxtField, Formm, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./EditStandards.styles"

export default function EditStandards() {
    
 const [Tdd , setTdd] = useState();
useEffect(() => {
    calendar();
 });
const calendar = () => {
    let Tdd =   ``;
    let count = 1; 
    if(count < 30 ) {
    for(let i = 1; i < 6 ; i++){
      if(count < 30 ) {
         Tdd += `<Tr>`;
        for(let j = 0 ; j < 7; j++){
          Tdd += `<Td>`+count+++`<Td>`;
        }
        Tdd +=`</Tr>`;
      }

    }
      }
      setTdd(Tdd);
    }
  
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
            <DropdownListItemStanderd >قراءة قرآن </DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">الصلاة في المسجد</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">غسل الجمعة</DropdownListItemStanderd>

          </DropdownListStanderd>


          <DivTxtField>
            <Span />
            <FormInput placeholder='ادخل اسم اخر - اختياري' type="text" required />
          </DivTxtField>

          <DropdownListStanderd className='DropdownList'>

            <DropdownListItemStanderd>اختر نوع النموذج</DropdownListItemStanderd>
            <DropdownListItemStanderd >قراءة قرآن </DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">الصلاة في المسجد</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">غسل الجمعة</DropdownListItemStanderd>

          </DropdownListStanderd>


          <DivTxtField>
            <Span />
            <FormInput placeholder='وصف النقاط - مثال : نقطتان لكل صفحة ' type="text" required />
          </DivTxtField>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' min="0" type="number"  required/>

            <Label>ادخل عدد نقاط المعيار</Label>
          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' min="0" type="number"  required />
            <Label>الحد الأعلى للتكرار</Label>

          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Checkboxes type="checkbox" /> <LabelSoper>هل متاح لأيام محددة؟</LabelSoper>
          </DivTxtFieldnumber>

          {/* <DivPass>رسالة من الbackend </DivPass> */}
          <InputSubmit type="submit" value='login' >تعديل المعيار</InputSubmit>
           <Table> 
            <Thead>
              <Tr>
                    <Th> 
                      الجمعة
                    </Th>
                    <Th> 
                      السبت
                    </Th>
                    <Th> 
                      الأحد 
                    </Th>
                    <Th> 
                      الاثنين 
                    </Th>
                    <Th> 
                      الثلاثاء
                    </Th>
                    <Th> 
                      الاربعاء 
                    </Th>
                    <Th> 
                      الخميس
                    </Th>
                </Tr> 
              </Thead> 
              <Tbody> 
                        { Tdd}
              </Tbody>
           </Table>
        </Formm>
      </DivCenter>

    </AddNewAdmindefault>
  )
}
