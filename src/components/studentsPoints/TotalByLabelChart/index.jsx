import React, { useState, useEffect } from "react";
import { retrieveStudentsPointsPerLabelORPerDay } from "services/studentsServices";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { H5 } from "../../Students/setPasswordStudent/SetPasswordStudent.styles";
import { EventTracker } from '@devexpress/dx-react-chart';

export default function TotalByLabelChart({ selectedUser }) {
  const [chartData, setChartData] = useState([]);
  const [targetItem, setTargetItem] = useState(undefined);

  function Content({ text, targetItem, ...restProps }) {
    const displayText = chartData[targetItem?.point]?.point_template__label;

    return <Tooltip.Content // we had to get the Content from the Tooltip because it seems to be a higher order component.
      {...restProps}
      text={displayText}
      targetItem={targetItem}
    />
  }

  useEffect(() => {
    if (selectedUser !== "") {
      retrieveStudentsPointsPerLabelORPerDay(
        selectedUser,
        "type", // retrieve result for the student per day
        (res) => {
          setChartData(res.data.total_points_by_type);
        },
        (err) => {
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
      <Chart data={chartData} >
        <ArgumentAxis showLabels={false} />
        <ValueAxis max={1000} />

        <BarSeries
          valueField="total_point"
          argumentField="point_template__label"
        />

        <EventTracker />

        <Title text="الإحصائيات لكل معييار" />

        <Animation />

        <Tooltip contentComponent={Content} targetItem={targetItem} onTargetItemChange={setTargetItem} />

      </Chart>
    </div>
  );
}
