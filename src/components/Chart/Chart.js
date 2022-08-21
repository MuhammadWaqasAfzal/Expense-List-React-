import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((e) => (
        <ChartBar
          key={e.label}
          value={e.value}
          label={e.label}
          maxValue={maxValue}
        />
      ))}

      
    </div>
  );
};

export default Chart;
