import {ChartData} from '../../../models/chartmodel'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type ChartProps = {
  data: ChartData
}

Highcharts.theme = {
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
           '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
      backgroundColor: {
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
          ]
      },
  },
  title: {
      style: {
          color: '#A8A8A8',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
  }
};

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

Highcharts.setOptions(Highcharts.theme);

export default ChartTemplate;
