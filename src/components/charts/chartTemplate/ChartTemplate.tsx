import {ChartData} from '../../../models/chartmodel'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type ChartProps = {
  data: ChartData
}

const ChartTemplate = ({data} : ChartProps) => {

  return (
    <div className="flex">
      <HighchartsReact
        highcharts={Highcharts}
        options={data}
      />
    </div>
  );
}

export default ChartTemplate;
