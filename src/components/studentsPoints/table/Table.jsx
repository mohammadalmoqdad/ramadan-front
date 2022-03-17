import React, { useState, useEffect } from 'react';
import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import {
  deleteRow,
  openAllEditors,
  saveAllEditors,
  validate
} from 'ka-table/actionCreators';
import './table-style.css'
import { retrieveStudentsPointsPerDay, updateStudentPoint } from "../../../services/studentsServices";
import { kaPropsUtils } from 'ka-table/utils';


// const EditButton = ({
//   dispatch, rowKeyValue
// }) => {
//   return (
//     <div className='edit-cell-button'>
//       <img
//         src='https://komarovalexander.github.io/ka-table/static/icons/edit.svg'
//         alt='Edit Row'
//         title='Edit Row'
//         onClick={() => dispatch(openRowEditors(rowKeyValue))}
//       />
//     </div>
//   );
// };

// const SaveButton = ({
//   dispatch, rowKeyValue
// }) => {
//   return (
//     <div className='buttons'
//       style={{ display: 'flex', justifyContent: 'space-between' }} >
//       <img
//         src='https://komarovalexander.github.io/ka-table/static/icons/save.svg'
//         className='save-cell-button'
//         alt='Save'
//         title='Save'
//         onClick={() => {
//           dispatch(saveRowEditors(rowKeyValue, {
//             validate: true,
//           }));
//         }}
//       />
//       <img
//         src='https://komarovalexander.github.io/ka-table/static/icons/close.svg'
//         className='close-cell-button'
//         alt='Cancel'
//         title='Cancel'
//         onClick={() => {
//           dispatch(closeRowEditors(rowKeyValue));
//         }}
//       />
//     </div >
//   );
// };

const DeleteRow = ({
  dispatch, rowKeyValue,
}) => {
  return (
    <img
      src='https://komarovalexander.github.io/ka-table/static/icons/delete.svg'
      className='delete-row-column-button'
      onClick={() => {
        dispatch(deleteRow(rowKeyValue))
        // ********************************************** here is hitting the API for the delete action

      }}
      alt=''
    />
  );
};

function getTablePropsInit(studentData) {
  const dataArray = studentData.map(
    (element, index) => ({
      standard: `${element?.point_template?.label}`,
      point: `${element?.point_scored_units}`,
      pointID: `${element?.id}`,
      pointTemplateID: `${element?.point_template?.id}`,
      id: index,
    }),
  );
  // console.log("in getTablePropsInit:", studentData);

  const tablePropsInit = {
    columns: [
      { key: 'standard', title: 'Standard Label', dataType: DataType.String },
      { key: 'point', title: 'Point', dataType: DataType.String },
      { key: ':delete', width: 70, style: { textAlign: 'center' } },
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
  return tablePropsInit;
}

function getDifference(array2, array1) {
  return array1.filter(object1 => {
    return !array2.some(object2 => {
      return object1 === object2;
    });
  });
}

function TableData({ selectedUser, selectedDay }) {
  const [tableData, setTableData] = useState([]);
  const [isTableShown, setIsTableShown] = useState(true);
  const [tableProps, changeTableProps] = useState(getTablePropsInit(tableData));
  const [editedOrRemovedPointData, setEditedOrRemovedPointData] = useState();
  let flag = true;
  let tempPrevArr;
  const dispatch = (action) => {
    changeTableProps((prevState) => {
      if (flag) {
        tempPrevArr = prevState.data;
        flag = false;
      }
      if (tempPrevArr) setEditedOrRemovedPointData(getDifference(tempPrevArr, prevState.data)[0])
      return kaReducer(prevState, action)
    });
  };

  const updateCells = () => {
    if (kaPropsUtils.isValid(tableProps)) {
      if (editedOrRemovedPointData?.pointID) {
        updateStudentPoint(selectedUser, editedOrRemovedPointData?.pointID,
          { point_scored_units: editedOrRemovedPointData?.point, ramadan_record_date: selectedDay, point_template: editedOrRemovedPointData?.pointTemplateID },
          () => { dispatch(saveAllEditors()) },
          () => { dispatch(validate()) },
          true
        )
      }
    }
    else {
      dispatch(validate())
    }
  }
  useEffect(() => {
    if (selectedDay && selectedUser) {
      retrieveStudentsPointsPerDay(selectedUser, selectedDay,
        (res) => {
          setTableData(res.data.student_points)
          if (res.data.student_points) changeTableProps(getTablePropsInit(res.data.student_points))
          setIsTableShown(true)
        },
        (err) => {
          // *************** TODO: need to show message if no data within that day and that student ***************
          console.log("ERROR: " + JSON.stringify(err.response.data));
        })
    }
  }, [selectedUser, selectedDay]);


  return (
    // ******** TODO : try to limit the maximum value for the point in the front end or at least render a feild for that *************************** 
    <>
      {isTableShown &&
        <>
          <button onClick={updateCells}>
            Update and Save
          </button>
          <Table
            {...tableProps}
            childComponents={{
              cellText: {
                content: (props) => {
                  // eslint-disable-next-line default-case
                  switch (props.column.key) {
                    case ':delete': return <DeleteRow {...props} />;
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