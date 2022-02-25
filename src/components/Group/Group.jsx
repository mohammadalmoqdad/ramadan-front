import React, { useState } from 'react'

import Multiselect from 'multiselect-react-dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewAdmindefault, { DivMultiselect, DivTxtFieldDaynumber, DropdownListItemDays, AvailableDays, DivTxtFieldnumber, FormInputnumber, Label, LabelSoper, DropdownListStanderd, DropdownListItemStanderd, Checkboxes, Wird, InputSubmit, DivPass, FormInput, DivTxtField, Formm, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./Group.styles"
import Sidebar from "components/shared/Sidebar";


export default function Group() {

  const [showdays, setshowdays] = useState('none')
  const [selectedDayOf, setselectedDayOf] = useState([])
  const [addGroup, setaddGroup] = useState([])

  const dayOfRamdan = (e) => {
    if (showdays === 'none') {
      setshowdays('block')
      setaddGroup('none')
    } else {
      setshowdays('none')
      setaddGroup('block')

      setselectedDayOf([])
      console.log(selectedDayOf);
    }
  }

  const handleAddDays = (e) => {
    // setdays(e)
    let selectedDay = []
    // console.log(e[0].id);
    for (let i = 0; i < e.length; i++) {
      selectedDay[i] = e[i].id;
    }
    setselectedDayOf(selectedDay)
    // console.log(selectedDayOf);
  }

  const handleDeleteDays = (e) => {
    // setdays(e)
    let selectedDay = []
    // console.log(e[0].id);
    for (let i = 0; i < e.length; i++) {
      selectedDay[i] = e[i].id;
    }
    // console.log(selectedDayOf);
    setselectedDayOf(selectedDay)

  }

  const day = [
    { dayOfRamdan: 'أنس القاضي', id: 1 },
    { dayOfRamdan: 'مقداد', id: 2 },
    { dayOfRamdan: 'حمدان', id: 3 },
    { dayOfRamdan: 'أمين', id: 4 },
    { dayOfRamdan: 'حمزة أبوسنينة', id: 5 },
  ]

  const [options] = useState(day);

  return (
    <AddNewAdmindefault>

      {/* <DropdownDiv className='DropdownDiv'>

        <DropdownDivSelect>


          <I></I><Span>اختر الأيام التي تريد أن يكون متاحا بها</Span>

        </DropdownDivSelect> */}

      {/* <AvailableDays className='DropdownList'>

          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 1 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>
          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 2 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>
          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 3 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>

        </AvailableDays> */}

      {/* </DropdownDiv> */}

      <DivCenter>

        {/* <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login> */}
        <H3Login>اضافة مجموعة</H3Login>

        <Formm>

          <DropdownDiv className='DropdownDiv'>
            <DropdownDivSelect>
              <I></I><Span>أسماء الطلبة يكمن اضافتهم</Span>
              <DivMultiselect >
                <Multiselect

                  onSelect={handleAddDays}
                  onRemove={handleDeleteDays}

                  placeholder='اختر الايام ليكون متاحا'
                  options={options} // Options to display in the dropdown
                  displayValue='dayOfRamdan'

                  popupHeight='1rem'
                  popupwidth='5rem'
                />
              </DivMultiselect>
            </DropdownDivSelect>

          </DropdownDiv>

          <DivTxtField style={{ display: addGroup }}>
            <Span />
            <FormInput placeholder='ادخل اسم المجموعة الجديدة' type="text" required />
          </DivTxtField>

          <DivTxtFieldnumber>
            <Checkboxes type="checkbox" onChange={dayOfRamdan} /> <LabelSoper>هل تريد تعديل أو حذف مجموعة سابقة؟</LabelSoper>
          </DivTxtFieldnumber>

          <DivMultiselect style={{ display: showdays }}>

            <DropdownListStanderd className='DropdownList'>

              <DropdownListItemStanderd>أسم المجموعة </DropdownListItemStanderd>
              <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
              <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
              <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

            </DropdownListStanderd>

            <DropdownListStanderd className='DropdownList'>

              <DropdownListItemStanderd>اسماء الطلبة الموجودين بالمجموعة </DropdownListItemStanderd>
              <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
              <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
              <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>

            </DropdownListStanderd>

            <InputSubmit type="submit" value='' >تعديل المجموعة</InputSubmit>
            <InputSubmit type="submit" value='' >حذف المجموعة</InputSubmit>

          </DivMultiselect>
          {/* <DivPass>رسالة من الbackend </DivPass> */}
          <InputSubmit type="submit" value='login' style={{ display: addGroup }} >اضافة مجموعة</InputSubmit>

        </Formm>
      </DivCenter>

      <Sidebar />
    </AddNewAdmindefault>
  )
}
