import React, {useState} from "react";
import {
    DivPass,
    DivTxtField,
    DropdownDiv,
    DropdownList,
    DropdownListItem,
    Form,
    FormInput,
    InputSubmit,
    Span,
    DivFileField, H5
} from "../setPasswordStudent/SetPasswordStudent.styles";
import {DropdownDivSelect as Box} from '../../Groups/Groups.styles';
import {Checkboxes, DivTxtFieldnumber, LabelSoper} from "../../Standards/AddStandardForm/AddStandardForm.styles";
import {updateStudent} from "../../../services/studentsServices";

export default function EditStudentForm(props){
    const [messages, setMessages] = useState([]);
    const [selectedUsername, setSelectedUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photo, setPhoto] = useState(null);
    const [isReadOnly, setReadOnly] = useState(false);

    const handleEditStudentSubmit = (e)=>{
        e.preventDefault();

        if(selectedUsername === ""){
            setMessages(['يجب عليك إختيار طالب للتعديل']);
            return;
        }
        let formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("read_only", isReadOnly);

        if(photo && photo.name && photo.name.length > 0 ){
            formData.append("profile_photo", photo);
        }

        updateStudent(selectedUsername, formData,
            (res)=>{
                if(res && res.status === 200){
                    let updatedStudent = props.students.filter(student => student.username === selectedUsername)[0];
                    updatedStudent.first_name = firstName;
                    updatedStudent.last_name = lastName;
                    updatedStudent.read_only = isReadOnly;
                    props.setStudents([...props.students.filter(student => student.username !== selectedUsername), updatedStudent]);
                    setMessages(['تم تعديل الطالب بنجاح']);
                }
            },(err)=>{
                let errMessages = [];
                errMessages.push(["لم يتم تعديل الطالب"]);
                if(err && err.response && err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages);
            }
        )
    };

    const handleSelectedUserChange = (e) => {
        setSelectedUsername(e.target.value);
        if(e.target.value !== ""){
            let student = props.students.filter(st => st.username === e.target.value)[0];
            setFirstName(student.first_name);
            setLastName(student.last_name);
            setReadOnly(student.read_only);
        }else{
            setFirstName("");
            setLastName("");
            setReadOnly(false);
        }
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleReadOnlyCheckboxChange = (e)=>{
        setReadOnly(e.target.checked);
    };

    const handlePhotoChange = (e)=>{
        setPhoto(e.target.files[0]);
    }

    return(
        <Form onSubmit={handleEditStudentSubmit}>

            <DropdownDiv className="DropdownDiv">
                <DropdownList onChange={handleSelectedUserChange} value={selectedUsername}>
                    <DropdownListItem key={0} value="">اختر الطالب</DropdownListItem>
                    {
                        props.students.map((student, index) => (
                            <DropdownListItem key={index + 1}
                                              value={student.username}>{student.first_name} {student.last_name}</DropdownListItem>
                        ))
                    }
                </DropdownList>
            </DropdownDiv>

            <DivTxtField>
                <Span />
                <FormInput onChange={handleFirstNameChange} placeholder='الاسم الأول' type="text" value={firstName} required />
            </DivTxtField>

            <DivTxtField>
                <Span />
                <FormInput onChange={handleLastNameChange} placeholder='اسم العائلة' type="text" value={lastName } required />
            </DivTxtField>

            <DivTxtFieldnumber>
                <Checkboxes type="checkbox" checked={isReadOnly} onChange={handleReadOnlyCheckboxChange}/> <LabelSoper>إضافته كطالب يستطيع المشاهدة فقط؟</LabelSoper>
            </DivTxtFieldnumber>

            <Box>
                <H5>تحميل صورة شخصية</H5>
                <DivFileField>
                    <FormInput type="file" onChange={handlePhotoChange}/>
                </DivFileField>
            </Box>

            {messages.length > 0 &&
                messages.map((message, index) => {
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value="login">
                تعديل الطالب
            </InputSubmit>
        </Form>
    );
}