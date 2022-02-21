import React, { useState, useContext } from "react";
import Container, { Wird, DivPass, DivCenter, H3Login, InputSubmit, Form, FormInput, H1Login, DivTxtField, FormLabel, Span } from "./addcriterias.styles";

import { useform } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "contexts/AdminContext";

export default function AddCriterias() {
    const context = useContext(AdminContext);
    const [username, setUsername] = useState("");
    const [adminCriterias, setAdminCriterias] = useState({});
    // {setAdminCriterias({ ...adminCriterias, type: "checkbox" })}

    return (
        <DivCenter>
        <Form >
          <DivTxtField>
            <Span />
            <FormInput  type="text" placeholder='اسم التحدي' required />
          </DivTxtField>
          <DivTxtField>
            <Span />
            <FormInput  placeholder='نوع الفورم' type="text" required />
          </DivTxtField>
          <DivTxtField>
            <Span />
            <FormInput  type="text" placeholder='عدد النقاط' required />
          </DivTxtField>
          <DivTxtField>
            <Span />
            <FormInput placeholder='وصف للنقاط' type="text" required />
          </DivTxtField>
          <DivTxtField>
            <Span />
            <FormInput  type="number" placeholder='الحد الأعلى للتكرار' required />
          </DivTxtField>
          <DivTxtField>
            <Span />
            <FormInput  placeholder='نوع الفورم' type="checkbox" required />
          </DivTxtField>
          <DivPass> إضافة المعيار</DivPass>
          <InputSubmit type="submit" value='save' >تسجيل الدخول</InputSubmit>
        </Form>
         </DivCenter>
    );
}
