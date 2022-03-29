import React, {useEffect, useState} from 'react';
import {kaReducer, Table} from 'ka-table';
import {DataType, EditingMode, SortingMode} from 'ka-table/enums';
import {deleteRow, saveAllEditors, validate} from 'ka-table/actionCreators';
import './table-style.css'
import {deleteStudentPoint, retrieveStudentsPointsPerDay, updateStudentPoint} from "../../../services/studentsServices";
import {kaPropsUtils} from 'ka-table/utils';
import Modal from "../../shared/Modal/Modal";

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
    const [isTableShown, setIsTableShown] = useState(true);
    const [tableProps, changeTableProps] = useState(getTableProps(tableData));
    const [editedOrRemovedPointData, setEditedOrRemovedPointData] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [pointIdToDelete, setPointIdToDelete] = useState(-1);
    const [rowToDelete, setRowToDelete] = useState(-1);
    let flag = true;
    let tempPrevArr;


    const dispatch = (action) => {
        changeTableProps((prevState) => {
            if (flag) {
                tempPrevArr = prevState.data;
                flag = false;
            }
            if (action.row && action.data) {
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
                    () => {
                        dispatch(saveAllEditors())
                    },
                    () => {
                        dispatch(validate())
                    },
                    true
                )
            }
        } else {
            // for validation, we can add another button to check the value restrictions.
            dispatch(validate())
        }
    }
    useEffect(() => {
        if (selectedDay && selectedUser) {
            retrieveStudentsPointsPerDay(selectedUser, selectedDay,
                (res) => {
                    setTableData(res.data.student_points)
                    if (res.data.student_points) changeTableProps(getTableProps(res.data.student_points))
                    setIsTableShown(true)
                },
                (err) => {
                    // *************** TODO: need to show message if no data within that day and that student ***************
                    console.log("ERROR: " + JSON.stringify(err.response.data));
                })
        }
    }, [selectedUser, selectedDay]);

    const deleteFunction = ()=>{

        deleteStudentPoint(
            selectedUser,
            pointIdToDelete,
            (res) => {
                dispatch(deleteRow(rowToDelete));
                console.log(res)
            },
            (err) => {
                console.log(JSON.stringify(err));
            });
        setOpenModal(false);
    };

    return (
        // ******** TODO : try to limit the maximum value for the point in the front end or at least render a field for that ***************************
        // ******** TODO : and to limit the minimum to not be negative ***************************
        <>
            { openModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذه النتيجة؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenModal} deleteFunction={deleteFunction} />
            }
            {isTableShown && selectedUser && selectedDay &&
                <>
                    <button onClick={updateCells} className='save-changes'>
                        حفظ التغيرات
                    </button>
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
                </>
            }
        </>
    );
}

export default TableData;