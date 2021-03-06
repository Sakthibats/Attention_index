import React from "react";
import './chart.css'
import '../styles/stylesheet.css'

import RealtimeLineChart from "./RealtimeLineChart";
import db from './Firebase';
import { collection, query, orderBy, limit} from '@firebase/firestore';
import { useCollectionData  } from 'react-firebase-hooks/firestore';
import { Divider } from "@mui/material";


const TIME_RANGE_IN_MILLISECONDS = 90 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

export default () => {
  const nameList = ["Meeting"];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: []
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);
  
  // Onchange in firebase Query recent 3 updates made to database to update graph subsequently
  const [value, loading, error, snapshot] = useCollectionData(
    query(collection(db, 'Meeting104'), orderBy("time", "desc"), limit(3)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(value)

  // Append most recent data to datalist
  const addlastdata = data => {
    if (Math.random() < 1 - ADDING_DATA_RATIO) {
      return data;
    }
    return [
      ...data,
      {
        x: new Date(),
        y: Math.round(value[0].attention)
      }
    ];
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
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
    <>

    <div className='lineTitle'>Attention Index</div>
    <div className='settingsTitle'>Options</div>
  
    <div className="graphWrapper">
      <div className="chartTile">
          <div className='chart'>
              <RealtimeLineChart
                  dataList={dataList}
                  range={TIME_RANGE_IN_MILLISECONDS}/>
          </div>
      </div>

      
      <div className="chartSettings">
        
        <ul className="settingsItem">Option 1</ul>
        <Divider variant="middle"/>
        <ul className="settingsItem">Option 2</ul>
        <Divider variant="middle"/>
        <ul className="settingsItem">Option 3</ul>
        <Divider variant="middle"/>
        <ul className="settingsItem">Option 4</ul>
        <Divider variant="middle"/>
        <ul className="settingsItem">Option 5</ul>
        <ul className="settingsItem">Option 6</ul>
        
      </div>
  
    </div>
  </>
  );
};