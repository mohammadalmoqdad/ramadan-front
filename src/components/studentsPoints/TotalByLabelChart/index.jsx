import React, { useState, useEffect } from 'react'
import { retrieveStudentsPointsPerLabelORPerDay } from 'services/studentsServices';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
  } from '@devexpress/dx-react-chart-material-ui';
  import { Animation } from '@devexpress/dx-react-chart';

export default function TotalByLabelChart({ selectedUser }) {
    const [chartData, setChartData] = useState('');


    useEffect(() => {
        if (selectedUser) {
            retrieveStudentsPointsPerLabelORPerDay(selectedUser, 'type', // retrieve result for the student per day
                (res) => {
                    setChartData(res.data.total_points_by_type)
                },
                (err) => {
                    // *************** TODO: need to show message if no data within that day and that student ***************
                    console.log("ERROR: " + JSON.stringify(err.response.data));
                })
        }
    }, [selectedUser]);
    return (
        <div style={{ width: '100%' }}>
        {chartData &&
          <>
            <Chart
              data={chartData}
            >
              <ArgumentAxis />
              <ValueAxis max={1000} />
  
              <BarSeries
                valueField="total_point"
                argumentField="point_template__label"
              />
              <Title text="Student Statistics Per Label" />
              <Animation />
            </Chart>
          </>
        }
      </div>
    )
}
