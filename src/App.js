import ReactEcharts from "echarts-for-react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

import "./App.css";

//bar graph format
const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

const App = () => {
  return (
    <div className="app">
      <Draggable axis="x">
        <div className="box">
          <Resizable
            className="resize-container"
            defaultSize={{
              width: 300,
              height: 300,
            }}
          >
            <div className="chart-container">
              <ReactEcharts option={option} />
            </div>
          </Resizable>
        </div>
      </Draggable>
    </div>
  );
};

export default App;
