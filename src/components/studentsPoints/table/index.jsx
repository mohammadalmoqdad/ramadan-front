import React, {useEffect, useState} from 'react';
import {kaReducer, Table} from 'ka-table';
import {DataType, EditingMode, SortingMode} from 'ka-table/enums';
import {deleteRow, saveAllEditors, validate} from 'ka-table/actionCreators';
import './table-style.css'
import {deleteStudentPoint, retrieveStudentsPointsPerDay, updateStudentPoint} from "../../../services/studentsServices";
import {kaPropsUtils} from 'ka-table/utils';
import Modal from "../../shared/Modal";
import {H5} from "../../Students/setPasswordStudent/SetPasswordStudent.styles";
import {DivPass} from "../../Standards/AddStandardForm/AddStandardForm.styles";

// get the table component the 
function getTableProps(studentData) {
    const dataArray = studentData.map(
        (element, index) => ({
            standard: `${element?.point_template?.label}`,
            point: `${element?.point_scored_units}`,
            pointID: `${element?.id}`,
            pointTemplateID: `${element?.point_template?.id}`,
            id: index,
        }),
    );

  return {
      columns: [
        {key: 'standard', title: 'عنوان المعييار', dataType: DataType.String},
        {key: 'point', title: 'النتيجة', dataType: DataType.String},
        {key: 'delete', style: {textAlign: 'center'}},
      ],
      data: dataArray,
      editingMode: EditingMode.Cell,
      editableCells: [{
        columnKey: 'point',
        rowKeyValue: 1,
      }],
      rowKeyField: 'id',
      sortingMode: SortingMode.Single,
    };
}

// to get an object that have the difference between two arrays
function getDifference(array2, array1) {
    return array1.filter(object1 => {
        return !array2.some(object2 => {
            return object1 === object2;
        });
    });
}


function TableData({selectedUser, selectedDay}) {
    const [tableData, setTableData] = useState([]);
    const [isTableShown, setIsTableShown] = useState(false);
    const [tableProps, changeTableProps] = useState(getTableProps(tableData));
    const [editedOrRemovedPointData, setEditedOrRemovedPointData] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [pointIdToDelete, setPointIdToDelete] = useState(-1);
    const [rowToDelete, setRowToDelete] = useState(-1);
    const [messages, setMessages] = useState([]);
    const [classColor, setClassColor] = useState("");
    let flag = true;
    let tempPrevArr;


    const dispatch = (action) => {
        changeTableProps((prevState) => {
            if (flag) {
                tempPrevArr = prevState.data;
                flag = false;
            }
            if (!isNaN(action.row) && action.data) {
                let selectedPoint = tableProps.data.filter(point => point.pointID === action.data.pointID)[0];
                if(selectedPoint){
                    setPointIdToDelete(selectedPoint.pointID);
                    setRowToDelete(action.row);
                    setOpenModal(true);
                }
            }
            if (action.columnKey === 'point') {
                if (tempPrevArr) setEditedOrRemovedPointData(getDifference(tempPrevArr, prevState.data)[0])
            }
            return kaReducer(prevState, action)
        });
    };

    const updateCells = () => {
        if (kaPropsUtils.isValid(tableProps)) {
            if (editedOrRemovedPointData?.pointID) {
                updateStudentPoint(selectedUser, editedOrRemovedPointData?.pointID,
                    {
                        point_scored_units: editedOrRemovedPointData?.point,
                        ramadan_record_date: selectedDay,
                        point_template: editedOrRemovedPointData?.pointTemplateID
                    },
                    (res) => {
                        if (res && res.status === 200) {

                            dispatch(saveAllEditors());
                            setMessages(['تم حفظ التغيرات بنجاح']);
                            setClassColor('green');

                            setTimeout(()=>{
                                setMessages([]);
                                setClassColor("");
                            },5000);
                        }
                    },
                    (err) => {
                        dispatch(validate());
                        let errMessages = [];
                        errMessages.push(["لم يتم حفظ التغيرات"]);
                        if(err.response.data){
                            let obj = err.response.data;
                            Object.keys(obj).forEach(e => {
                                    errMessages.push(`${obj[e]} : ${e}`);
                                }
                            )
                        }

                        setClassColor("red");
                        setMessages(errMessages);

                        setTimeout(()=>{
                            setMessages([]);
                            setClassColor("");
                        },5000);
                    }
                )
            }else{
                setMessages(['لم يحدث تغيير لحفظه']);
                setTimeout(()=>{
                    setMessages([]);
                },3000);
            }
        } else {
            // for validation, we can add another button to check the value restrictions.
            dispatch(validate());
        }
    }
    useEffect(() => {
        if (selectedDay !== "" && selectedUser !== "") {
            retrieveStudentsPointsPerDay(selectedUser, selectedDay,
                (res) => {
                    setTableData(res.data.student_points)
                    if (res.data.student_points) changeTableProps(getTableProps(res.data.student_points))
                    setIsTableShown(res.data.student_points.length > 0);
                },
                (err) => {
                    // *************** TODO: need to show message if no data within that day and that student ***************
                    console.log("ERROR: " + JSON.stringify(err.response.data));
                })
        }
        setMessages([]);
        setClassColor("");
    }, [selectedUser, selectedDay]);

    const deleteFunction = ()=>{

        deleteStudentPoint(
            selectedUser,
            pointIdToDelete,
            (res) => {
                if(res.status === 204){
                    dispatch(deleteRow(rowToDelete));
                    setMessages(['تم الحذف بنجاح']);
                    setClassColor('green');

                    setTimeout(()=>{
                        setMessages([]);
                        setClassColor("");
                    },5000);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push(["لم يتم الحذف"]);
                if(err.response.data){
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(`${obj[e]} : ${e}`);
                        }
                    )
                }

                setClassColor("red");
                setMessages(errMessages);

                setTimeout(()=>{
                    setMessages([]);
                    setClassColor("");
                },5000);
            });
        setOpenModal(false);
    };

    if(selectedUser === "" && selectedDay === ""){
        return <div className="table-msg-text-section"><H5>اختر اليوم والطالب</H5></div>;
    } else if (selectedUser === ""){
        return <div className="table-msg-text-section"><H5>اختر الطالب</H5></div>;
    } else if(selectedDay === ""){
        return <div className="table-msg-text-section"><H5>اختر اليوم</H5></div>;
    } else if(!isTableShown){
        return <div className="table-msg-text-section"><H5>لا يوجد نقاط لهذا اليوم</H5></div>;
    }

    return (
        // ******** TODO : try to limit the maximum value for the point in the front end or at least render a field for that ***************************
        // ******** TODO : and to limit the minimum to not be negative ***************************
        <>
            { openModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذه النتيجة؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenModal} deleteFunction={deleteFunction} />
            }
            <>
                <Table
                    {...tableProps}
                    childComponents={{
                        cellText: {
                            content: (props) => {
                                // eslint-disable-next-line default-case
                                switch (props.column.key) {
                                    case 'delete':
                                        return <img
                                            // case ':delete': return <DeleteRow username={selectedUser} pointID={editedOrRemovedPointData?.pointID} {...props} />;
                                            src='https://komarovalexander.github.io/ka-table/static/icons/delete.svg'
                                            className='delete-row-column-button'
                                            onClick={() => {
                                                dispatch({row: props.rowKeyValue, data: props.rowData});
                                            }}
                                            alt=''
                                        />;
                                }
                            }
                        },
                    }}
                    dispatch={dispatch}
                    width='100%'
                />
                {messages.length > 0 &&
                    messages.map((message, index) => {
                        return <DivPass className={classColor} key={index}>{message}</DivPass>
                    })
                }
                <button onClick={updateCells} className='save-changes'>
                    حفظ التغيرات
                </button>
            </>
        </>
    );
}

export default TableData;