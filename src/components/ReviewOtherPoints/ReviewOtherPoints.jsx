import React, {useEffect, useState} from "react";
import {retrieveStudents, retrieveStudentsPointsOfTypeOther, updateStudentPoint} from "../../services/studentsServices";
import { TxtArea, DropDownDiv, DropdownList} from "./ReviewOtherPoints.styles";
import { DropdownDivSelect as Box, Form} from "../Groups/Groups.styles"
import Tabs from "../shared/Tabs/Tabs";
import {DropdownListItem} from "../studentsPoints/StudentsPoints.styles";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import {Span} from "../Login/login.styles";
import {
    DivPass,
    DivTxtField,
    DivTxtFieldnumber,
    FormInput,
    FormInputnumber, InputSubmit, Label
} from "../Standards/AddStandardForm/AddStandardForm.styles";
import Container from '../Standards/Standards.styles';
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";

export default function ReviewOtherPoints(){
    const [selectedStudentUsername, setSelectedStudentUsername] = useState("");
    const [selectedDay, setSelectedDay] = useState(0);
    const [students, setStudents] = useState([]);
    const [otherPoints, setOtherPoints] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState({});
    const [pointRecord, setPointRecord] = useState(-1);
    let navigate = useNavigate();

    useEffect(()=>{
        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Review-other-points"}});
        }
        retrieveStudents(
            (res) => {
                setStudents(res.data);
            }, (err) => {
                console.log("Failed to retrieve students: " + JSON.stringify(err.response.data));
            });
    },[]);

    useEffect(()=>{
        setMessages([]);
    },[selectedStudentUsername, selectedDay, otherPoints, selectedPoint, pointRecord]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(pointRecord < 0){
            setMessages(['يجب عليك إدخال نتيجة لإضافتها']);
            return;
        }

        updateStudentPoint(selectedStudentUsername, selectedPoint.id,
            {
                    point_scored_units: pointRecord,
                    point_template: selectedPoint.point_template.id,
                    ramadan_record_date: selectedDay
                },
            (res)=>{
                if(res && res.status === 200){
                    let filteredOtherPoints = otherPoints.filter(otherPoint => otherPoint.id !== selectedPoint.id);
                    setOtherPoints(filteredOtherPoints);
                    setMessages(['تم إضافة النتيجة بنجاح']);
                }
            },
            (err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم إضافة النتيجة"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages);
            }
        );

    };

    const getUserPoint = (username, day)=>{
        retrieveStudentsPointsOfTypeOther(username, day,
            (res)=>{
                if(res && res.status === 200){
                    setOtherPoints(res.data);
                    if(res.data.length ===1){
                        setSelectedPoint(res.data[0]);
                    }
                }
            },(err)=>{
                console.log("Failed to retrieve students point of type other: ", err?.response?.data);
            }
        );
    };

    const handleSelectedUserChange = (e)=>{
        setSelectedPoint({});
        setOtherPoints([]);
        setSelectedStudentUsername(e.target.value);
        if(e.target.value !== "" && selectedDay !== 0){
            getUserPoint(e.target.value, selectedDay);
        }
    };

    const handleDayChange = (e)=>{
        setSelectedPoint({});
        setOtherPoints([]);
        setSelectedDay(Number(e.target.value));
        if(Number(e.target.value) !== 0 && selectedStudentUsername !== ""){
            getUserPoint(selectedStudentUsername, Number(e.target.value));
        }
    };

    const handlePointChange = (e) =>{
        let point = otherPoints.filter(otherPoint => otherPoint.id === e.target.value)[0];
        if(point){
            setSelectedPoint(point);
        }else{
            setSelectedPoint({});
        }
    };

    const handlePointRecordChange = (e) => {
      setPointRecord(Number(e.target.value));
    }

    return (

        <Container>
            <Tabs labels={['مراجعة المدخلات النصية']} contents={[
                <>
                    {students && students.length > 0 ?
                        <Form onSubmit={handleSubmit}>
                            <DropDownDiv className="DropdownDiv" onChange={handleSelectedUserChange}>
                                <DropdownList className="DropdownList">
                                    <DropdownListItem key={0} value="">اختر الطالب</DropdownListItem>
                                    {
                                        students.map((student, index) => (
                                            <DropdownListItem key={index + 1}
                                                              value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                                        ))
                                    }
                                </DropdownList>
                            </DropDownDiv>


                            <DropDownDiv className="DropdownDiv" onChange={handleDayChange}>
                                <DropdownList className="DropdownList">
                                    <DropdownListItem key={0} value="0">اختر اليوم</DropdownListItem>
                                    {
                                        ([...Array(30).keys()].map(i => i + 1)).map((day) => (
                                            <DropdownListItem key={day}
                                                              value={day}> {day} رمضان </DropdownListItem>
                                        ))
                                    }
                                </DropdownList>
                            </DropDownDiv>

                            {selectedDay === 0 && selectedStudentUsername === "" ?
                                <Span>اختر الطالب واليوم</Span>
                                : selectedDay === 0 ?
                                    <Span>اختر اليوم</Span>
                                    : selectedStudentUsername === "" ?
                                        <Span>اختر الطالب</Span>
                                        :
                                        <>
                                            {otherPoints && otherPoints.length === 0 ?
                                                <Span>لا يوجد مدخلات نصية للطالب في هذا اليوم</Span>

                                                : otherPoints.length > 1 ?
                                                    <DropDownDiv className="DropdownDiv"
                                                                 onChange={handlePointChange}>
                                                        <DropdownList className="DropdownList">
                                                            <DropdownListItem key={0} value="0">اختر
                                                                المعييار</DropdownListItem>
                                                            {
                                                                otherPoints.map((point, index) => (
                                                                    <DropdownListItem key={index + 1}
                                                                                      value={point.id}>{point.point_template.label}</DropdownListItem>
                                                                ))
                                                            }
                                                        </DropdownList>
                                                    </DropDownDiv>

                                                    : <></>
                                            }
                                            {Object.keys(selectedPoint).length > 0 &&
                                                <>

                                                    {selectedPoint.user_input?.length > 0
                                                        ? <Box>
                                                            <H5>النص المدخل من الطالب</H5>
                                                            <TxtArea readOnly
                                                                     value={selectedPoint.user_input}/>
                                                        </Box>

                                                        : <Span>لم يقم الطالب بأي إدخال</Span>

                                                    }
                                                    <DivTxtField>
                                                        <FormInput placeholder='العنوان' type="text"
                                                                   value={selectedPoint.point_template.label}
                                                                   readOnly/>
                                                    </DivTxtField>

                                                    <DivTxtFieldnumber>
                                                        <Span/>
                                                        <FormInputnumber  type="number" readOnly value={selectedPoint.point_template.upper_units_bound}/>
                                                        <Label>الحد الأعلى للتكرار</Label>
                                                    </DivTxtFieldnumber>

                                                    <DivTxtFieldnumber>
                                                        <Span/>
                                                        <FormInputnumber  type="number" max={selectedPoint.point_template.upper_units_bound} required onChange={handlePointRecordChange}/>
                                                        <Label>ادخل النتيجة</Label>
                                                    </DivTxtFieldnumber>

                                                    { messages.length > 0  &&
                                                        messages.map((message, index)=>{
                                                            return <DivPass key={index}>{message}</DivPass>
                                                        })
                                                    }
                                                    <InputSubmit type="submit">إضافةالنتيجة</InputSubmit>

                                                </>

                                            }
                                        </>

                            }

                        </Form>

                        : <H5> لا يوجد طلاب </H5>
                    }
                </>

            ]}/>
        </Container>
    );
}