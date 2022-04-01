import React, { useState, useEffect } from 'react'
import { retrieveStudentsPointsPerLabelORPerDay } from 'services/studentsServices';
import {
  Chart,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import  {LineSeries} from '@devexpress/dx-react-chart';
import {H5} from "../../Students/setPasswordStudent/SetPasswordStudent.styles";
export default function TotalByPoints({ selectedUser }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selectedUser !== "") {
      retrieveStudentsPointsPerLabelORPerDay(selectedUser, 'day', // retrieve result for the student per day
        (res) => {
          setChartData(res.data.total_points_by_day);
        },
        (err) => {
          // *************** TODO: need to show message if no data within that day and that student ***************
          console.log("ERROR: " + JSON.stringify(err.response.data));
        })
    }else{
      setChartData([]);
    }
  }, [selectedUser]);

  if(selectedUser === ""){
    return <div style={{ width: '100%' }} className="table-msg-text-section"><H5>اختر الطالب لعرض الإحصائيات لكل يوم</H5></div>;
  }

  if(chartData.length ===0){
    return <div style={{ width: '100%' }} className="table-msg-text-section"><H5>لا يوجد نقاط لعرض الإحصائيات لكل يوم</H5></div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <Chart
        data={chartData}
      >
        <ArgumentAxis />
        <ValueAxis max={1000} />

        <LineSeries
          valueField="total_day"
          argumentField="ramadan_record_date"
        />
        <Title text="الإحصائيات لكل يوم" />
      </Chart>
    </div>
  )
}
