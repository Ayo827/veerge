'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { Box } from '@chakra-ui/react';

export default function CalendarComponent(){
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Box maxW="500px" mx="auto" my="4">
      <Calendar
        onChange={onChange}
        value={date}
        style={{ backgroundColor: '#000', color: '#fff' }}
      />
    </Box>
  );
};

