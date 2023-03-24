import React, { useEffect, useState } from 'react'
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
    ResponsiveContainer, 
    ReferenceLine
  } from 'recharts';
import { selectMyObject } from 'redux/slices/dailyInputSlice';
import { selectDate } from 'redux/slices/dailyInputSlice';
import { collection, doc, DocumentData, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from 'config/firebase'
import { Flex, Heading } from '@chakra-ui/react';

interface Data {
  food: number;
  data: number;
  transfers: number;
  transit: number;
  others: number;
}



const InputBarchart = () => {
  const inputData = useSelector(selectMyObject);
  const date = useSelector(selectDate)
  const Sum = inputData.food + inputData.data + inputData.others + inputData.transfers + inputData.transit

  const data = Object.entries(inputData).map(([name, value]) => ({
    name,
    value,
  }));

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
          <Bar dataKey="value" name={`Total: ${Sum}`} />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default InputBarchart