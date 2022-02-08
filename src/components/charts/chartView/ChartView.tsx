import {ChartData} from '../../../models/chartmodel'
import ChartTemplate from '../chartTemplate/ChartTemplate';
import "./ChartView.css"

type ChartProps = {
  chartData1 : ChartData
  chartData2 : ChartData
  chartData3 : ChartData
  chartData4 : ChartData
}

const ChartView = ({chartData1, chartData2, chartData3, chartData4} : ChartProps) => {

  return (
    <div className="background">
      <ChartTemplate data={chartData1} />
      <ChartTemplate data={chartData2} />
      <ChartTemplate data={chartData3} />
      <ChartTemplate data={chartData4} />
    </div>
  );
}

export default ChartView;