'use client'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

export default function ListingOverview() {
    const Listing = [
        {
            title: "most viewed",
            borderColor: "#12D8A0"
        },
        {
            title: "most shared",
            borderColor: "#4545FE"
        }
    ]
    return (
        <Box className='overview-container'>
            <Heading fontSize={18} fontWeight={600}>
                Listing Overview
            </Heading>
            <Box display={"flex"} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mt={2}>
                {
                    Listing.map((list, index) => {
                        return <>
                            <Box width={"45%"} display={'flex'} flexDirection={'column'} alignItems={"flex-start"} height={100} key={index}>
                                <Text fontSize={10} fontWeight={400} textTransform={"capitalize"}>{list.title}</Text>
                                <Box width={"100%"} display="flex" alignItems={"center"} borderTop={"1px solid #E4E4E4"} mt={1} paddingTop="10px">
                                    <Box height={68} width={67} borderRadius={12} background={"#F5F5F5"} border={"1px solid " + list.borderColor}
                                        display="flex" alignItems="center" justifyContent="center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4993 33H24.4992C29.5847 33 33 29.4328 33 24.125V11.8751C33 6.56716 29.5847 3 24.5007 3H11.4993C6.41535 3 3 6.56716 3 11.8751V24.125C3 29.4328 6.41535 33 11.4993 33ZM12.7483 16.5C10.6803 16.5 9 14.8174 9 12.75C9 10.6826 10.6803 9 12.7483 9C14.8148 9 16.4965 10.6826 16.4965 12.75C16.4965 14.8174 14.8148 16.5 12.7483 16.5ZM29.7312 22.401C30.2336 23.6889 29.9725 25.2369 29.4355 26.5124C28.7991 28.0294 27.5803 29.178 26.0448 29.6796C25.363 29.9025 24.648 30 23.9346 30H11.293C10.035 30 8.92182 29.6982 8.00925 29.1362C7.43758 28.7834 7.33653 27.969 7.76037 27.4412C8.4693 26.5588 9.16918 25.6734 9.8751 24.7801C11.2206 23.0712 12.1271 22.5759 13.1347 23.0109C13.5434 23.1905 13.9537 23.4597 14.3761 23.7446C15.5013 24.5093 17.0655 25.5603 19.1259 24.4195C20.5359 23.6298 21.3537 22.2752 22.0659 21.0956L22.0778 21.0759C22.1283 20.9931 22.1782 20.9103 22.2281 20.8278C22.4674 20.4318 22.7036 20.041 22.9707 19.681C23.3057 19.2306 24.5469 17.822 26.1549 18.8252C27.1791 19.4566 28.0404 20.3112 28.962 21.226C29.3135 21.5758 29.5638 21.9736 29.7312 22.401Z" fill="#E4E4E4" />
                                        </svg>
                                    </Box>
                                    <Text fontSize={16} fontWeight={600} textTransform={"capitalize"} ml={3}>None</Text>
                                </Box>
                            </Box>
                        </>
                    })
                }
            </Box>

            <Box width="100%" padding={11} background={"#F5F5F5"} borderRadius={12} mt={2}>
                <Text fontSize={10} fontWeight={400} textTransform={"capitalize"}>Most watchlist</Text>
                <Box width={"100%"} display="flex" alignItems={"center"}  mt={1}>
                    <Box width={"100%"} display="flex" alignItems={"center"}  mt={1}>
                        <Box height={68} width={67} borderRadius={12} background={"#F5F5F5"} border={"1px solid #FF9103"}
                            display="flex" alignItems="center" justifyContent="center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4993 33H24.4992C29.5847 33 33 29.4328 33 24.125V11.8751C33 6.56716 29.5847 3 24.5007 3H11.4993C6.41535 3 3 6.56716 3 11.8751V24.125C3 29.4328 6.41535 33 11.4993 33ZM12.7483 16.5C10.6803 16.5 9 14.8174 9 12.75C9 10.6826 10.6803 9 12.7483 9C14.8148 9 16.4965 10.6826 16.4965 12.75C16.4965 14.8174 14.8148 16.5 12.7483 16.5ZM29.7312 22.401C30.2336 23.6889 29.9725 25.2369 29.4355 26.5124C28.7991 28.0294 27.5803 29.178 26.0448 29.6796C25.363 29.9025 24.648 30 23.9346 30H11.293C10.035 30 8.92182 29.6982 8.00925 29.1362C7.43758 28.7834 7.33653 27.969 7.76037 27.4412C8.4693 26.5588 9.16918 25.6734 9.8751 24.7801C11.2206 23.0712 12.1271 22.5759 13.1347 23.0109C13.5434 23.1905 13.9537 23.4597 14.3761 23.7446C15.5013 24.5093 17.0655 25.5603 19.1259 24.4195C20.5359 23.6298 21.3537 22.2752 22.0659 21.0956L22.0778 21.0759C22.1283 20.9931 22.1782 20.9103 22.2281 20.8278C22.4674 20.4318 22.7036 20.041 22.9707 19.681C23.3057 19.2306 24.5469 17.822 26.1549 18.8252C27.1791 19.4566 28.0404 20.3112 28.962 21.226C29.3135 21.5758 29.5638 21.9736 29.7312 22.401Z" fill="#E4E4E4" />
                            </svg>
                        </Box>
                        <Text fontSize={16} fontWeight={600} textTransform={"capitalize"} ml={3}>None</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} border={"1px solid #E4E4E4"} borderRadius= "12px" background={"#fff"} height={68} width="80%" p="9px" >
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={24} fontWeight={400}>0</Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z" fill="#CBCBCB" />
                            </svg>
                        </Box>
                        <Text fontSize={10} fontWeight={400}>Number of watchlists</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}