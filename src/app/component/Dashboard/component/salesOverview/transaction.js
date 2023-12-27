'use client'
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

export default function Transaction() {
    const transactionData = [
        {
            type: "profit",
            amount: 0.00,
            title: "balance",
            percentage: 0
        },
        {
            type: "profit",
            amount: 0.00,
            title: "deposit",
            percentage: 0
        },
        {
            type: "profit",
            amount: 0.00,
            title: "purchase",
            percentage: 0
        },
        {
            type: "loss",
            amount: 0.00,
            title: "withdrawal",
            percentage: 0,
        }
    ];
    return (
        <SimpleGrid columns={2} spacing={5} width="45%" height="fit-content" mt={4}>
            {
                transactionData.map((transaction, index) => {
                    return <>
                        <Box bg='#fff' width="100%" height='73px' p={13} display="flex" flexDirection="column" justifyContent="space-evenly" border="1px solid #E4E4E4" backgroundColor="#fff" borderRadius={12}
                            key={index}
                        >
                            <Text fontSize={20} fontWeight={600}  color={transaction.title === 'balance' ? "#4545FE" : transaction.title === "deposit" ? "#12D8A0" : transaction.title === "withdrawal" ? "#FF6A6A" : "#000"}>₦ {transaction.amount.toFixed(2)}</Text>
                            <Box display="flex" width="75%" justifyContent="space-between" alignItems="center">
                                <Text fontSize={10} fontWeight={500} textTransform="capitalize"
                               
                                >{transaction.title}</Text>
                                {
                                    transaction.type === "profit" ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <g clip-path="url(#clip0_2_981)">
                                            <path d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z" fill="#12D8A0" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_981">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <g clip-path="url(#clip0_2_986)">
                                            <path d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z" fill="#FF6A6A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_986">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }

                                <Text fontSize={10} fontWeight={400}>{transaction.percentage}%</Text>
                            </Box>
                        </Box>
                    </>
                })
            }
        </SimpleGrid>
    )
}