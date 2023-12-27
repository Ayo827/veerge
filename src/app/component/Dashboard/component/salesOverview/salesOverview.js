'use client'
import { Box, Heading, Text, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import ApexChart from './chart';
import Transaction from './transaction';

export default function SalesOverview() {
    const [active, setActive] = useState(0);
    const filterParam = [
        '1 Week', '1 Month', '1 year'
    ]
    return (
        <Box width="63%" boxShadow=" 0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#fff" borderRadius={16} height="fit-content" display='flex' flexDirection="column" >
            <Box display="flex" justifyContent="space-between" alignItems="center" height="fit-content" p={22}>
                <Box>
                    <Heading fontSize={20} fontWeight={600}>Sales Overview</Heading>
                    <Text fontSize={12} fontWeight={400} color="#606060">Showing overview Jan 2022 - Sep 2022</Text>
                </Box>
                <FormControl width="30%">
                    <Box display="flex" width='100%' height={43} border="1px solid #E4E4E4" background='#F5F5F5' borderRadius={12} alignItems="center">
                        <Input type='search' placeholder="View transactions" className='search-input' />
                    </Box>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="flex-end" width="100%" height={45} borderBottom="1px solid #E4E4E4" pr={22}>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="30%">
                    {
                        filterParam.map((param, index) => {
                            return <>
                                <Box key={index} width={80} height={33} borderRadius={8} background={active === index ? "#F5F5F5" : "white"} cursor="pointer" display="flex" alignItems="center" justifyContent="center" onClick={() => {
                                    setActive(index);
                                }}>
                                    <Text style={active === index ? { fontWeight: 600 } : { fontWeight: 400 }} fontSize={14} textTransform="capitalize">{param}</Text>
                                </Box>
                            </>
                        })
                    }
                </Box>
            </Box>
            <Box display="flex" width="100%" height="fit-content"  justifyContent="space-between" p={22}>
                <ApexChart />
                <Transaction />
            </Box>

        </Box>

    )
}