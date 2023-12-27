
import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
            show: false,
          },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [0,0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  return (
    <Box w="50%" height={170}  mt="4">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height="100%"
        
      />
    </Box>
  );
};

export default ApexChart;
