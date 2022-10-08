import React, {useEffect, useState} from 'react';
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
import {  DropdownListItem as Item} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import Container, {DropdownList, DropdownListItem, Span, Form, InputSubmit, DivPass} from "../Admins/Admins.styles";
import {ReactComponent as FileDownload} from "assets/icons/fileDownload.svg";
import {exportPoints} from "../../services/adminsServices";
import {DropDownDiv, DropdownList as List} from "../ReviewOtherPoints/ReviewOtherPoints.styles";
import {saveAs} from "file-saver";
import Loader from "../Loader";

export default  function ExportPoints() {

    const [fromDay, setFromDay] = useState("");
    const [fromArray, setFromArray] = useState([]);
    const [toArray, setToArray] = useState([]);
    const [toDay, setToDay] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setFromArray([...Array(30).keys()].map(i => i + 1));
        setToArray([...Array(30).keys()].map(i => i + 1));

        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/ExportPoints"}});
        }
    }, []);

    useEffect(()=>{
        if(fromDay !== ""){
            setToArray([...Array(30).keys()].map(i => i + 1).filter(i => i > Number(fromDay)));
            setToDay("");
        }
    },[fromDay]);

    useEffect(()=>{
        setMessages([]);
        setClassColor("");
    },[fromDay, toDay])


    const handleExportPointsSubmit = (e) => {
      e.preventDefault();

      if(fromDay === "" || toDay === ""){
          setClassColor("red");
          setMessages(['اختر الآبام لاستخراج النتائج']);
          return;
      }

      setLoading(true);
      exportPoints(fromDay, toDay, (res)=>{
          if(res && res.status === 200){


              setMessages(["تم استخراج النتائج بنجاح"]);
              setClassColor("green");
              saveAs(res.data, `Points_${fromDay}_${toDay}.xlsx`);

              setLoading(false);

              setTimeout(()=>{
                  setClassColor("");
                  setMessages([]);
              },2000);

          }
        },(err)=>{

          let errMessages = [];
          let isHtmlResponse = err?.response?.headers && err?.response?.headers['content-type'] === 'text/html';
          errMessages.push("لم يتم استخراج النتائج");
          if (err.response.data && !isHtmlResponse) {
              let obj = err.response.data;
              Object.keys(obj).forEach(e => {
                      errMessages.push(`${obj[e]} : ${e}`);
                  }
              )
          }
          setClassColor("red");
          setMessages(errMessages);
          setLoading(false);
          }
      );
    };

    const handleFromDayChange = (e)=>{
      setFromDay(e.target.value);
    };

    const handleToDayChange = (e)=>{
        setToDay(e.target.value);
    };

    if(loading) {
        return (
            <main>
                <Loader />
            </main>
        );
    }


    return (
        <Container>
            <DropdownList className='DropdownList'>
                <DropdownListItem  className="title"><Span>استخراج النتائج</Span></DropdownListItem>
                <div className="dropdown-scroll-container">
                    <DropdownListItem>
                        <Form onSubmit={handleExportPointsSubmit}>
                            <div style={{display: 'inline-block', direction: 'rtl', marginBottom:'15px'}}>
                                <DropDownDiv className="DropdownDiv" style={{display: 'inline', margin: '10px'}}>
                                    <List className="DropdownList" onChange={handleFromDayChange} value={fromDay}>
                                        <Item key={0} value="">من يوم</Item>
                                        {
                                            fromArray.map((day) => (
                                                <Item key={day} value={day}> {day} رمضان </Item>
                                            ))
                                        }
                                    </List>
                                </DropDownDiv>
                                <DropDownDiv className="DropdownDiv" style={{display: 'inline', margin: '10px'}}>
                                    <List className="DropdownList" onChange={handleToDayChange} value={toDay}>
                                        <Item key={0} value="">إلى يوم</Item>
                                        {
                                            toArray.map((day) => (
                                                <Item key={day} value={day}> {day} رمضان </Item>
                                            ))
                                        }
                                    </List>
                                </DropDownDiv>
                            </div>

                            { messages.length > 0 &&
                                messages.map((message, index) => {
                                    return <DivPass className={classColor} key={index}>{message}</DivPass>
                                })
                            }
                            { fromDay !== "" && toDay !== "" &&
                                <>
                                    <DivPass style={{color:'#000'}}>يمكنك استخراج النتائج مرة واحدة يوميا</DivPass>
                                    <InputSubmit type="submit" value='exportPoints'> استخراج <FileDownload style={{fill: 'white'}}/></InputSubmit>
                                </>
                            }

                        </Form>
                    </DropdownListItem>
                </div>
            </DropdownList>
        </Container>
    );
}