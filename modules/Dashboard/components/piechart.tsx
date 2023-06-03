import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { 
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    Text
   } from "recharts"
import { connect, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { InputData, selectMyObject } from 'redux/slices/dailyInputSlice';
import ArrowPic from "../../../images/arrow2.png"
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Item {
  id?: number;
  food: number;
  data: number;
  transit: number;
  transfers: number;
  others: number;
  sum: number;  
}


const InputPiechart = () => {
    const pieColor = useColorModeValue("#8ab7ff","#8ab4ff")
    const pieColor2 = useColorModeValue("#8ab7ff","#8ab4ff")
    const textColor = useColorModeValue("white","white")
    const items = useSelector((state: RootState) => state.number.items);

    const chartData = [
      { name: 'Food', value: 0 },
      { name: 'Data', value: 0 },
      { name: 'Transit', value: 0 },
      { name: 'Transfers', value: 0 },
      { name: 'Others', value: 0 },
    ];
    
    items.forEach((item) => {
      chartData[0].value += item.food;
      chartData[1].value += item.data;
      chartData[2].value += item.transit;
      chartData[3].value += item.transfers;
      chartData[4].value += item.others;
    });
    
  
    const COLORS = ['#8ab7ff', '#7190eb', '#5596ff', '#4666cd', '#2e6cd0'];

    const sumOfCategories = items.reduce(
      (total, item) => total + item.food + item.data + item.transit + item.transfers + item.others,
      0
    );
    

  return (
    <Flex>
      {sumOfCategories === 0 ? (
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{duration: 2}}
        >
          <Flex
          w={["15rem", "15rem", "18rem", "18rem"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mb={["-1.9rem","-1.9rem","-3.7rem","-4.5rem"]}
          >
            <Heading
              mt={["-0.1rem","1.7rem","2.3rem","2.3rem"]}
              size={["sm","xs","sm","md"]}
              color={textColor}
            >
              What did you spend on today?
            </Heading>
            <Flex
              mt={["1rem","","",""]}
            >
              <Image
                src={ArrowPic}
                alt=""
                placeholder="blur"
                priority
              />
            </Flex>
          </Flex>
        </motion.div>
      ) : (
        <PieChart width={250} height={250}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={82}
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
              const RADIAN = Math.PI / 189;
              const angle = -midAngle * RADIAN;
              // Calculate the x and y positions for the label
              const x = cx + (outerRadius + innerRadius) / 1.7 * Math.cos(angle);
              const y = cy + (outerRadius + innerRadius) / 1 * Math.sin(angle);

              return (
                <text
                  x={x}
                  y={y}
                  fill={textColor}
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                  fontSize="16"
                  textDecoration=""
                  fontWeight={600}
                >
                  <tspan x={x} dy="1.2em">
                    {/* {`${chartData[index].name}: ${chartData[index].value}`} */}
                    {`${chartData[index].name}`}
                  </tspan>
                </text>
              );
            }}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </Flex>
  )
}

export default InputPiechart