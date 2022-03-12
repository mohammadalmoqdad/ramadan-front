import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Div, { FormInput, Span, DivTxtField, InputSubmit, DivIn } from "./Tabl.styles"
import { dataStudentPoints } from "../../../services/studentsServices";
import Modals from './modal/Modals'

export default function Tabl(props) {
  const [showdays, setshowdays] = useState('none');
  const [usaruame, setUsarName] = useState(null);
  const [StudentsPoints, setStudentsPoints] = useState(null);
  const dayOfRamdan = (e) => {
    if (showdays === "none") {
      setshowdays("block");
    } else {
      setshowdays("none");
    }
  };
  


  useEffect(() => {
    console.log(props.usarName);

    dataStudentPoints(
      props.usarName,
      null,
      (res) => {
        setStudentsPoints(res.data);
        console.log(res.data);
        // console.log(Students);
      }, (err) => {
        console.log("ERROR: " + JSON.stringify(err));
      }
    );
  }, [props.usarName || usaruame]);

  const [studentPoints, setStudentPoints] = useState({}); // re-assign to this variable when reselecting the student info that cones from the props.


  return (
    <Div>



    </Div>
  );
              }
