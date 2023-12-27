'use client'

import React, { useState } from 'react';
import { Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import Image
  from 'next/image';
import CalendarComponent from "./calendar";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Box p={4} pl={78} pr={78} height={82} boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#191919" width="100%" justifyContent="space-between" display="flex">
        <Box>
          <Image src="/images/logo.svg" alt="my image" width={119} height={35} />
          <Text textTransform="uppercase" color="#fff" fontSize={14} fontWeight={400}>for mainstone</Text>
        </Box>


        <Box display="flex" alignItems="center" justifyContent="space-between" width="40%">
          <Box display="flex" alignItems="center" width="43%" justifyContent="space-between">
            <Image src="/images/Plus.svg" alt="my image" width={32} height={32} />
            <Image src="/images/Calendar.svg" alt="my image" width={32} height={32} cursor="pointer" onClick={handleOpenModal} />
            <Image src="/images/Notification.svg" alt="my image" width={32} height={32} />
          </Box>
          <Box display="flex" alignItems="center" width="40%" justifyContent="space-between">
            <Image src="/images/profile.svg" alt="my image" width={30} height={30} />
            <Text color="#fff" fontSize={16} fontWeight={500}>Ahmed Ali</Text>
            <Image src="/images/arrow.svg" alt="my image" width={30} height={30} />
          </Box>

        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent bg="#0D0D0D" >
          <ModalHeader bg="#171717" boxShadow="0px 3.206px 6.413px 0px rgba(0, 0, 0, 0.02)" color={"#fff"}>Calendar</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"#fff"}>
            <CalendarComponent />
          </ModalBody>
       
        </ModalContent>
      </Modal>
    </>
  );
}
