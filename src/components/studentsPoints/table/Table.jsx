import React, { useState } from 'react';
import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { closeRowEditors, openRowEditors, saveRowEditors, deleteRow } from 'ka-table/actionCreators';
import './table-style.css'


const data = [
  {
    "id": 1,
    "point_template": {
      "label": "Standard 3",
      "description": "This is test standard with custom days and with other type.",
      "form_type": "oth",
      "upper_units_bound": 12,
      "lower_units_bound": 0,
      "points_per_unit": 1
    },
    "student": "mhmdBnAli",
    "point_scored_units": 1,
    "details": "NO NEED",
    "ramadan_record_date": 27,
    "point_total": 1
  },
  {
    "id": 2,
    "point_template": {
      "label": "Standard 3",
      "description": "This is test standard with custom days and with other type.",
      "form_type": "oth",
      "upper_units_bound": 12,
      "lower_units_bound": 0,
      "points_per_unit": 1
    },
    "student": "mhmdBnAli",
    "point_scored_units": 1,
    "details": "NO NEED",
    "ramadan_record_date": 27,
    "point_total": 1
  },
  {
    "id": 3,
    "point_template": {
      "label": "Standard 3",
      "description": "This is test standard with custom days and with other type.",
      "form_type": "oth",
      "upper_units_bound": 12,
      "lower_units_bound": 0,
      "points_per_unit": 1
    },
    "student": "mhmdBnAli",
    "point_scored_units": 1,
    "details": "NO NEED",
    "ramadan_record_date": 27,
    "point_total": 1
  },
  {
    "id": 4,
    "point_template": {
      "label": "Standard 3",
      "description": "This is test standard with custom days and with other type.",
      "form_type": "oth",
      "upper_units_bound": 12,
      "lower_units_bound": 0,
      "points_per_unit": 1
    },
    "student": "mhmdBnAli",
    "point_scored_units": 1,
    "details": "NO NEED",
    "ramadan_record_date": 27,
    "point_total": 1
  },
  {
    "id": 5,
    "point_template": {
      "label": "Standard 3",
      "description": "This is test standard with custom days and with other type.",
      "form_type": "oth",
      "upper_units_bound": 12,
      "lower_units_bound": 0,
      "points_per_unit": 1
    },
    "student": "mhmdBnAli",
    "point_scored_units": 1,
    "details": "NO NEED",
    "ramadan_record_date": 27,
    "point_total": 1
  }
]
const EditButton = ({
  dispatch, rowKeyValue
}) => {
  return (
   <div className='edit-cell-button'>
     <img
      src='https://komarovalexander.github.io/ka-table/static/icons/edit.svg'
      alt='Edit Row'
      title='Edit Row'
      onClick={() => dispatch(openRowEditors(rowKeyValue))}
    />
   </div>
  );
};

const SaveButton = ({
  dispatch, rowKeyValue
}) => {
  return (
    <div className='buttons'
      style={{display: 'flex', justifyContent: 'space-between'}} >
      <img
        src='https://komarovalexander.github.io/ka-table/static/icons/save.svg'
        className='save-cell-button'
        alt='Save'
        title='Save'
        onClick={() => {
          dispatch(saveRowEditors(rowKeyValue, {
            validate: true,
          }));
        }}
      />
      <img
        src='https://komarovalexander.github.io/ka-table/static/icons/close.svg'
        className='close-cell-button'
        alt='Cancel'
        title='Cancel'
        onClick={() => {
          dispatch(closeRowEditors(rowKeyValue));
        }}
      />
   </div >
 );
};


const EditingDemoRow = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };
}
  
const DeleteRow = ({
  dispatch, rowKeyValue,
}) => {
  return (
    <img
      src='https://komarovalexander.github.io/ka-table/static/icons/delete.svg'
      className='delete-row-column-button'
      onClick={() => {dispatch(deleteRow(rowKeyValue))
        // ********************************************** here is hitting the API for the delete action
      
      }}
      alt=''
    />
  );
};

const dataArray = Array(10).fill(undefined).map(
  (_, index) => ({
    column1: `${data[0]['point_template']['label']}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    id: index,
  }),
);



const tablePropsInit = {
  columns: [
    { key: 'column1', title: 'Standard Label', dataType: DataType.String },
    { key: 'column2', title: 'Description', dataType: DataType.String },
    { key: 'column3', title: 'Point Unit', dataType: DataType.String },
    { key: ':delete', width: 70, style: { textAlign: 'center' } },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};

function TableData() {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

  return (
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
        cellText: {
          content: (props) => {
            if (props.column.key === 'editColumn'){
              return <EditButton {...props}/>
            }
          }
        },
        cellEditor: {
          content: (props) => {
            if (props.column.key === 'editColumn'){
              return <SaveButton {...props}/>
            }
          }
        }
      }}
      dispatch={dispatch}
      width='100%'
    />
  );
}

export default TableData;