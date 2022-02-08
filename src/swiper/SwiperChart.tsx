import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getChartData, getChartDataByType, getSmile } from '../api/api';
import ChartView from '../components/charts/chartView/ChartView';
import { ChartData } from '../models/chartmodel';
import 'swiper/swiper-bundle.css'
import { Smile } from '../components/smiley/Smile';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const swiperOptions = {
  delay: 10_000,
  disableOnInteractions: false
};

const swiperOptions2 = {
  clickable: true
};

const SwiperChart = () => {
     
    
  const [chartType, setChartType] = useState("area");
  const chartTypeRef = useRef(chartType);
  const [chartData, setChartData] = useState<ChartData>()
  const [chartDataByType, setChartDataByType] = useState<ChartData>()
  const [smileValue, setSmileValue] = useState<number>()

  useEffect(() => {
    const run = async () => {
      chartTypeRef.current = chartType;
      const [response1, response2] = await Promise.all([getChartData(), getChartDataByType(chartType)]);
      if (chartTypeRef.current === chartType) {
        setChartData(response1);
        setChartDataByType(response2);
      }
    };
    run();
  }, [chartType])

  useEffect(() => {
    const run = async () => {
      const response = await getSmile();
      setSmileValue(response);
    }
    run()
  }, [])

  return (
    <div>
      <Swiper
        autoplay={swiperOptions}
        navigation
        pagination={swiperOptions2}
        slidesPerView={1}
        spaceBetween={50}
      >
        <SwiperSlide>
          <ChartView
            chartData1={chartDataByType!!} chartData2={chartData!!}
            chartData3={chartData!!} chartData4={chartDataByType!!}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ChartView
            chartData1={chartData!!} chartData2={chartData!!}
            chartData3={chartDataByType!!} chartData4={chartData!!}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ChartView
            chartData1={chartData!!} chartData2={chartDataByType!!}
            chartData3={chartData!!} chartData4={chartData!!}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ChartView
            chartData1={chartData!!}  chartData2={chartData!!}
            chartData3={chartData!!} chartData4={chartData!!}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Smile value={smileValue!!}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperChart;