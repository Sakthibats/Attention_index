import React from "react";
import Chart from "react-apexcharts";

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
      labels: {
        formatter: val => val.toFixed(0)
      },
      title: { text: "Attention Score" }, 
    }
  };
  return <Chart type="area" options={options} series={props.dataList} />;
};
