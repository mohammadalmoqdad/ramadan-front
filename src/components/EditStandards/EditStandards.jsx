import React, { useEffect, useState } from 'react'
// import { AiFillCaretDown } from "react-icons/ai";

import Multiselect from 'multiselect-react-dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddNewAdmindefault, { DivMultiselect, DivTxtFieldDaynumber, DropdownListItemDays, AvailableDays, DivTxtFieldnumber, FormInputnumber, Label, LabelSoper, DropdownListStanderd, DropdownListItemStanderd, Checkboxes, Wird, InputSubmit, DivPass, FormInput, DivTxtField, Formm, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./EditStandards.styles"
import Sidebar from "components/shared/Sidebar";

export default function EditStandards() {

  const [showdays, setshowdays] = useState('none')
  const[selectedDayOf, setselectedDayOf]= useState([])

  const dayOfRamdan = (e) =>{
    if(showdays === 'none'){
      setshowdays('block')
    }else{
      setshowdays('none')
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
    { dayOfRamdan: 'يوم 1 رمضان', id: 1 },
    { dayOfRamdan: 'يوم 2 رمضان', id: 2 },
    { dayOfRamdan: 'يوم 3 رمضان', id: 3 },
    { dayOfRamdan: 'يوم 4 رمضان', id: 4 },
    { dayOfRamdan: 'يوم 5 رمضان', id: 5 },
  ]

  const [options] = useState(day);
  // console.log(days);



  return (
    <AddNewAdmindefault>
      
      {/* <DropdownDiv className='DropdownDiv'> */}

        {/* <DropdownDivSelect>


          <I><AiFillCaretDown /></I><Span>اختر الأيام التي تريد أن يكون متاحا بها</Span>

        </DropdownDivSelect> */}

        {/* <AvailableDays className='DropdownList'>

          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 1 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>
          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 2 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>
          <DropdownListItemDays value="An"><DivTxtFieldDaynumber><Checkboxes type="checkbox" /> <LabelSoper>يوم 3 رمضان</LabelSoper></DivTxtFieldDaynumber></DropdownListItemDays>

        </AvailableDays> */}

      {/* </DropdownDiv> */}

      <DivCenter>

        {/* <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login> */}
        <H3Login>تعديل معايير المسابقة</H3Login>

        <Formm>

          <DropdownListStanderd className='DropdownList'>

            <DropdownListItemStanderd>اختر اسم المعيار - من السيرفر </DropdownListItemStanderd>
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
            <FormInputnumber placeholder='0' type="number" min ='0' required />

            <Label>ادخل عدد نقاط لكل تكرار</Label>
          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' type="number" min='0' required />
            <Label>عدد التكرارات المسموح بها باليوم</Label>

          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' type="number" min='0' required />
            <Label>الحد الادنى للتركرار</Label>

          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Checkboxes type="checkbox" onChange={dayOfRamdan} /> <LabelSoper>هل متاح لأيام محددة؟</LabelSoper>
          </DivTxtFieldnumber>

          <DivMultiselect style={{display: showdays}}>
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
          {/* <DivPass>رسالة من الbackend </DivPass> */}
          <InputSubmit type="submit" value='login' >تعديل المعيار</InputSubmit>

        </Formm>
      </DivCenter>
      <Sidebar/>
    </AddNewAdmindefault>
  )
}
