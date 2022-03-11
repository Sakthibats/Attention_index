import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import db from './Firebase';
import { onSnapshot } from '@firebase/firestore'

import { useState,useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { Metric } from 'web-vitals';
const Chart = () => {

  const [loading,setLoading] = useState(false);
  const[metrics,setMetrics]= useState([]);

  

  
  

  useEffect(
    () => 
    onSnapshot(collection(db,"Meeting 101"),(snapshot)=>
      setMetrics(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    ),
    []

  );


    const data = [
        {
          time: 5,
          blinks:100,
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          time: 10,
          blinks:20,
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          time: 15,
          blinks:30,
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          time: 20,
          blinks:40,
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          time: 25,
          blinks:50,
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          time:30,
          blinks:60,
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          time: 40,
          blinks:70,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      console.log(data);



  return (
    <div className='chart'>
    <h3 className='chartTitle'>Attention Index</h3>
    
    

    <ResponsiveContainer width ='100%' aspect={4 / 1}>
        <LineChart data={metrics}>
            <XAxis dataKey='time' stroke='blue'/>
            <Line type='monotone' dataKey= 'blinks'/>
            <Tooltip/>
            <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
            </LineChart>

        </ResponsiveContainer>
    
    </div>
    
  )
}

export default Chart