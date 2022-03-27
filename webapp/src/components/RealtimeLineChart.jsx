import React from "react";
import Chart from "react-apexcharts";

import '../styles/stylesheet.css'

export default props => {
  const options = {
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }, 
    },
    dataLabels: {
      enabled: false
    },
    chart: {
      height: '100%',
      width: '100%',
      fontFamily: 'AssistantMedium',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    tooltip: {
      x: {
        format: "yyyy/MM/dd HH:mm:ss.f"
      }
    },
    xaxis: {
      type: "datetime",
      range: props.range
    },
    yaxis: {
      max: 100 ,
      labels: {
        formatter: val => val.toFixed(1)
      },
      title: { text: "Attention Score"}, 
    }
  };
  return <Chart type="area" options={options} series={props.dataList} />;
};
