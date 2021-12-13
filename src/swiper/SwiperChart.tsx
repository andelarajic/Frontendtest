import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getChartData, getChartDataByType } from '../api/api';
import ChartView from '../components/charts/chartView/ChartView';
import { ChartData } from '../models/chartmodel';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const swiperOptions = {
    delay: 10_000,
    disableOnInteractions: false
};

const swiperOptions2 = {
    clickable: true
};

const SwiperChart = () => {

    const [chartType, setChartType] = useState("column");
    const chartTypeRef = useRef(chartType);
    const [chartData, setChartData] = useState<ChartData>()
    const [chartDataByType, setChartDataByType] = useState<ChartData>()
    
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

    return (
        <div>
                <Swiper
                    autoplay={swiperOptions}
                    navigation
                    pagination={swiperOptions2}
                    slidesPerView={1}
                    spaceBetween={50} >
                    <SwiperSlide>
                        <ChartView 
                        chartData1={chartData!!} chartData2={chartData!!} 
                        chartData3={chartData!!} chartData4={chartData!!} />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
    );
}

export default SwiperChart;