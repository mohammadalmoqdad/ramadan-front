import React, { useState, useEffect } from "react";
import { retrieveStudentsPointsPerLabelORPerDay } from "services/studentsServices";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { H5 } from "../../Students/setPasswordStudent/SetPasswordStudent.styles";

export default function TotalByLabelChart({ selectedUser }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selectedUser !== "") {
      retrieveStudentsPointsPerLabelORPerDay(
        selectedUser,
        "type", // retrieve result for the student per day
        (res) => {
          setChartData(res.data.total_points_by_type);
        },
        (err) => {
          // *************** TODO: need to show message if no data within that day and that student ***************
          console.log("ERROR: " + JSON.stringify(err.response.data));
        }
      );
    } else {
      setChartData([]);
    }
  }, [selectedUser]);

  if (selectedUser === "") {
    return (
      <div style={{ width: "100%" }} className="table-msg-text-section">
        <H5>اختر الطالب لعرض الإحصائيات لكل معييار</H5>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div style={{ width: "100%" }} className="table-msg-text-section">
        <H5>لا يوجد نقاط لعرض الإحصائيات لكل معييار</H5>
      </div>
    );
  }

  return (
    <div style={{ width: "auto" }}>
      <Chart data={chartData} rotated>
        <ArgumentAxis />
        <ValueAxis max={1000} />

        <BarSeries
          valueField="total_point"
          argumentField="point_template__label"
        />
        <Title text="الإحصائيات لكل معييار" />
        <Animation />
      </Chart>
    </div>
  );
}
