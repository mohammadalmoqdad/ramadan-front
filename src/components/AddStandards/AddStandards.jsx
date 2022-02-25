import React, { useEffect, useState } from 'react'

// import { AiFillCaretDown } from "react-icons/ai";

import Multiselect from 'multiselect-react-dropdown';

// import 'bootstrap/dist/css/bootstrap.min.css';

import AddNewAdmindefault, {Imgtype , Frame,Framephone, DivMultiselect, DivTxtFieldDaynumber, DropdownListItemDays, AvailableDays, DivTxtFieldnumber, FormInputnumber, Label, LabelSoper, DropdownListStanderd, DropdownListItemStanderd, Checkboxes, Wird, InputSubmit, DivPass, FormInput, DivTxtField, Formm, H3Login, H1Login, DivCenter, StudantName, DropdownListItem, DropdownList, DropdownDiv, DropdownDivSelect, Span, I } from "./AddStandards.styles"

export default function AddStandards() {
  const [showdays, setshowdays] = useState('none')
  const [typephoto , settypephoto] = useState('type2');

  const dayOfRamdan   = (e) =>{
    if(showdays == 'none'){
      setshowdays('block')
    }else{
      setshowdays('none')
    }
  }
  
  const typeOfinput = (e) =>{
      console.log(e.target.value);
      settypephoto(e.target.value) 
  }

  const handleAddDays = (e) => {
    // setdays(e)
    let selectedDay = []
    // console.log(e[0].id);
    for (let i = 0; i < e.length; i++) {
      selectedDay[i] = e[i].id;
    }
    console.log(selectedDay);
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
        <H3Login>نوع النموذج الذي تم اختياره</H3Login>
        <Frame >
          <Framephone >
          <Imgtype src={typephoto + '.png'} alt="" />
          {/* <Imgtype src="type2.png" alt="" /> */}

          </Framephone>
        </Frame>

      </DivCenter>

      <DivCenter>

        {/* <H1Login>أهلا بك في موقع<Wird>وِرد</Wird> </H1Login> */}
        <H3Login>اضافة معايير المسابقة</H3Login>

        <Formm>
          <DropdownListStanderd className='DropdownList'>
            <DropdownListItemStanderd>اختر اسم المعيار (مقترحات) </DropdownListItemStanderd>
            <DropdownListItemStanderd >امين بسام صالح</DropdownListItemStanderd>
            <DropdownListItemStanderd value="bo">أسامة مؤمن أبوحمدان</DropdownListItemStanderd>
            <DropdownListItemStanderd value="An">الليدر أنس القاضي</DropdownListItemStanderd>
          </DropdownListStanderd>

          <DivTxtField>
            <Span />
            <FormInput placeholder='ادخل اسم اخر - اختياري' type="text" required />
          </DivTxtField>

          <DropdownListStanderd className='DropdownList' onClick={typeOfinput}>
            <DropdownListItemStanderd value="type2">اختر نوع النموذج</DropdownListItemStanderd>
            <DropdownListItemStanderd value="type2" >قراءة قرآن </DropdownListItemStanderd>
            <DropdownListItemStanderd value="stand">الصلاة في المسجد</DropdownListItemStanderd>
          </DropdownListStanderd>


          <DivTxtField>
            <Span />
            <FormInput placeholder='وصف النقاط - مثال : نقطتان لكل صفحة ' type="text" required />
          </DivTxtField>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' type="number" min ='0' required />
            <Label>ادخل عدد نقاط المعيار</Label>
          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Span />
            <FormInputnumber placeholder='0' min="0" type="number"  required />
            <Label>الحد الأعلى للتكرار</Label>
          </DivTxtFieldnumber>

          <DivTxtFieldnumber>
            <Checkboxes type="checkbox" onChange={dayOfRamdan} /> <LabelSoper>هل متاح لأيام محددة؟</LabelSoper>
          </DivTxtFieldnumber>

          <DivMultiselect style={{display: showdays}}>
          <Multiselect
            // onSelect={handleDeleteDays}
            onSelect={handleAddDays}
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
     

    </AddNewAdmindefault>
  )
}