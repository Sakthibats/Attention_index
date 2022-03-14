import React from "react";
import './chart.css'

import RealtimeLineChart from "./RealtimeLineChart";
import db from './Firebase';
import { collection, getDocs, onSnapshot } from '@firebase/firestore';


const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

export default () => {
  const nameList = ["Meeting"];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: []
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);
  const[metrics,setMetrics]= React.useState([]);

  const addlastdata = data => {
    if (Math.random() < 1 - ADDING_DATA_RATIO) {
      return data;
    }
    return [
      ...data,
      {
        x: new Date(),
        y: metrics[metrics.length -1].blinks
      }
    ];
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      onSnapshot(collection(db,"Meeting 101"),(snapshot)=>{
          let list = snapshot.docs.map((doc)=>({...doc.data()})).sort((a, b) => parseFloat(a.time) - parseFloat(b.time))
          setMetrics(list)
      });
      setDataList(
        dataList.map(val => {
          return {
            name: val.name,
            data: addlastdata(val.data)
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

  return (
    <div className='chart'>
    <h3 className='chartTitle'>Attention Index</h3>
      <RealtimeLineChart
        dataList={dataList}
        range={TIME_RANGE_IN_MILLISECONDS}
      />
    </div>
  );
};