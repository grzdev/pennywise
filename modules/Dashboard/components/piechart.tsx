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


const InputPiechart = () => {
    const pieColor = useColorModeValue("#8ab7ff","#8ab4ff")
    const pieColor2 = useColorModeValue("#8ab7ff","#8ab4ff")
    const textColor = useColorModeValue("#90b9ff","white")
    const inputData = useSelector(selectMyObject);
    const chartData = Object.entries(inputData).map(([name, value], index) => {
        return {
          name,
          value,
        //   color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        };
      });
      const COLORS = ['#8ab7ff', '#7190eb', '#5596ff', '#4666cd', "#2e6cd0"];

    

  return (
    <Flex>
      {inputData.food === 0 ? (
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
              mt={["1.7rem","1.7rem","2.3rem","2.3rem"]}
              size={["xs","xs","sm","md"]}
              color={textColor}
            >
              What did you spend on today?
            </Heading>
            <Image
              src={ArrowPic}
              alt=""
              placeholder="blur"
              priority
            />
          </Flex>
        </motion.div>
      ) : (
      <PieChart 
          width={250} 
          height={250}
      >
        <Pie
          data={chartData}
          cx="50%" 
          cy="50%" 
          outerRadius={82}
          labelLine={false}
          // label={({ name }) => name}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
              const RADIAN = Math.PI / 189;
              // Calculate the angle of the label position
              const angle = -midAngle * RADIAN;
              // Calculate the x and y positions for the label
              const x = cx + (outerRadius + innerRadius) / 0.9 * Math.cos(angle);
              const y = cy + (outerRadius + innerRadius) / 0.8 * Math.sin(angle);
    
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
                  style={{ textTransform: 'capitalize'}}
                >
                  {`${name}`}
                </text>
              );
            }}
          // fill={pieColor2} 
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`}   fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
      </PieChart>
      )}
    </Flex>
  )
}

export default InputPiechart