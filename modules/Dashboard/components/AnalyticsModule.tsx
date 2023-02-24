import { 
  Container, 
  Flex, 
  useColorModeValue 
} from '@chakra-ui/react'
import React from 'react'
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


const AnalyticsModule = () => {
  const divColor = useColorModeValue("#6a11cb","#0c3483")
  const divGradient = useColorModeValue("linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);")

  const data = [
    {
      name: 'M',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'T',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'W',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'T',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'F',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'S',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'S',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <Container
      centerContent
    >
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w={["20rem","20rem","34rem","60rem"]}
          h={["30rem","30rem","39rem","34rem"]}
          borderRadius="1rem 1rem 0 1rem"
          bg= {divColor}
          bgGradient= {divGradient}
          mt={["3rem","","4rem","4rem"]}
          boxShadow="2xl"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            w={["","","","50rem"]}
            h={["","","","20rem"]}
            // mt={["","","","2rem"]}
          >
            <ResponsiveContainer 
              width="100%" 
              height="100%"
            >
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
             </ResponsiveContainer>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default AnalyticsModule