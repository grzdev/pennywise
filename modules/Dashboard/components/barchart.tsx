import React from 'react'
import { useSelector } from 'react-redux';
import { 
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
  } from 'recharts';
import { selectMyObject } from 'redux/slices/dailyInputSlice';
import { selectDate } from 'redux/slices/dailyInputSlice';


const InputBarchart = () => {
    const inputData = useSelector(selectMyObject);
    const date = useSelector(selectDate)

    
    // const chartData = [
    //   { name: date, 
    //     food: inputData.food,
    //     data: inputData.data,
    //     transit: inputData.transit,
    //     transfers: inputData.transfers,
    //     others: inputData.others,
    //   },
    //   { name: "Tuesday", 
    //     food: inputData.food,
    //     data: inputData.data,
    //     transit: inputData.transit,
    //     transfers: inputData.transfers,
    //     others: inputData.others,
    //   },
    //   { name: "Wednesday", 
    //     food: inputData.food,
    //     data: inputData.data,
    //     transit: inputData.transit,
    //     transfers: inputData.transfers,
    //     others: inputData.others,
    //   },
    //   { name: "Thursday", 
    //     food: inputData.food,
    //     data: inputData.data,
    //     transit: inputData.transit,
    //     transfers: inputData.transfers,
    //     others: inputData.others,
    //   },
    //   { name: "Friday", 
    //     food: inputData.food,
    //     data: inputData.data,
    //     transit: inputData.transit,
    //     transfers: inputData.transfers,
    //     others: inputData.others,
    //   }
    // ];
  
    

    const data = [
        {
          name: 'M',
          Food: 2000,
          Transit: 500,
          Data: 250,
          Transfers: 1000,
          Others: 750,
        },
        {
          name: 'T',
          Food: 2500,
          Transit: 500,
          Data: 550,
          Transfers: 1500,
          Others: 900,
        },
        {
          name: 'W',
          Food: 1500,
          Transit: 400,
          Data: 500,
          Transfers: 500,
          Others: 300,
        },
        {
          name: 'T',
          Food: 500,
          Transit: 500,
          Data: 1000,
          Transfers: 2000,
          Others: 750,
        },
        {
          name: 'F',
          Food: 2000,
          Transit: 1000,
          Data: 2000,
          Transfers: 1000,
          Others: 3500,
        },
        {
          name: 'S',
          Food: 3000,
          Transit: 100,
          Data: 3050,
          Transfers: 1500,
          Others: 150,
        },
        {
          name: 'S',
          Food: 1000,
          Transit: 100,
          Data: 1050,
          Transfers: 1000,
          Others: 750,
        },
      ];

  return (
    <ResponsiveContainer 
              width="100%" 
              height="100%"
            >
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Food" stackId="a" fill="#2897e4"/>
                <Bar dataKey="Transit" stackId="a" fill="#ff9232" />
                <Bar dataKey="Data" stackId="a" fill="#27ddff" />
                <Bar dataKey="Transfers" stackId="a" fill="#1e21a8" />
                <Bar dataKey="Others" stackId="a" fill="#9539ff" />
              </BarChart>
              {/* <BarChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="food" stackId="a" fill="#2897e4"/>
              <Bar dataKey="data" stackId="a" fill="#ff9232" />
              <Bar dataKey="transit" stackId="a" fill="#27ddff" />
              <Bar dataKey="transfers" stackId="a" fill="#1e21a8" />
              <Bar dataKey="others" stackId="a" fill="#9539ff" />
            </BarChart> */}
            </ResponsiveContainer>
  )
}

export default InputBarchart