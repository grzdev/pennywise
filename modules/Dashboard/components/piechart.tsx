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
import { MyObject, selectMyObject } from 'redux/slices/dailyInputSlice';
import ArrowPic from "../../../images/arrow.png"
import Image from 'next/image';


const InputPiechart = () => {
    const pieColor = useColorModeValue("#8ab7ff","#8ab4ff")
    const pieColor2 = useColorModeValue("#8ab7ff","#8ab4ff")

    const myObject = useSelector(selectMyObject);
    const chartData = Object.entries(myObject).map(([name, value], index) => {
        return {
          name,
          value,
        //   color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        };
      });
    

  return (
    <Flex>
      {myObject.food === 0 ? (
        <Flex
         w={["17rem", "40rem", "18rem", "18rem"]}
         flexDir="column"
         justifyContent="center"
         alignItems="center"
         mb={["-2.6rem","-2.6rem","-3.7rem","-4.5rem"]}
        >
            <Heading
              mt="2.3rem"
              size={["xs","xs","sm","md"]}
              color="white"
            >
              What did you spend on today?
            </Heading>
          <Image
            src={ArrowPic}
            alt=""
            />
        </Flex>
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
                  fill="#fff"
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
          fill={pieColor2} 
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
      </PieChart>
      )}
    </Flex>
  )
}

const mapStateToProps = (state: RootState) => {
    return {
      data: state.dailyInput.myObject,
    };
  };
export default InputPiechart
// export default connect(mapStateToProps)(InputPiechart);
  