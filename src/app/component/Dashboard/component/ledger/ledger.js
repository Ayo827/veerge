import { Box, Heading, Text } from '@chakra-ui/react';

export default function Ledger({ type, title, subTitle, cost, amount, text }) {
    return (
        <Box bg={"#fff"} height="287" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02);" p={21}>
            <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
                <Heading fontSize="16px" fontWeight={600} color="#12D8A0">{title}</Heading>
                {type === "outstanding" ? <>
                    <Box>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                            <Text fontSize="12px" fontWeight={500} color="#CBCBCB">view all </Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_1_1079)">
                                    <path d="M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z" fill="#CBCBCB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1079">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Box>
                    </Box> </>
                    : <></>
                }

            </Box>
            <Box>
                <Text fontSize="28px" fontWeight={600} color="#191919">₦ {parseFloat(cost).toFixed(2)}</Text>
                <Text fontSize="14px" fontWeight={400} color="#606060">{subTitle}</Text>
            </Box>
            <Box display="flex" width="100%" mt={2} justifyContent={"space-between"}>
                <Box height="155px" background={"#F5F5F5"} borderRadius="12px" width="45%" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9424 91.6667H68.0533C82.1796 91.6667 91.6667 81.7579 91.6667 67.0138V32.9863C91.6667 18.2421 82.1796 8.33334 68.0575 8.33334H31.9424C17.8204 8.33334 8.33334 18.2421 8.33334 32.9863V67.0138C8.33334 81.7579 17.8204 91.6667 31.9424 91.6667ZM35.4119 45.8333C29.6675 45.8333 25 41.1595 25 35.4167C25 29.6739 29.6675 25 35.4119 25C41.1521 25 45.8238 29.6739 45.8238 35.4167C45.8238 41.1595 41.1521 45.8333 35.4119 45.8333ZM82.5867 62.225C83.9821 65.8025 83.2571 70.1025 81.7654 73.6454C79.9975 77.8596 76.6121 81.05 72.3467 82.4434C70.4529 83.0625 68.4667 83.3334 66.485 83.3334H31.3693C27.875 83.3334 24.7828 82.495 22.2479 80.9338C20.66 79.9538 20.3793 77.6917 21.5566 76.2254C23.5258 73.7746 25.47 71.315 27.4308 68.8338C31.1683 64.0867 33.6864 62.7108 36.4852 63.9192C37.6207 64.4179 38.7603 65.1659 39.9335 65.9571C43.0592 68.0813 47.4042 71.0008 53.1275 67.8321C57.0442 65.6383 59.3158 61.8754 61.2942 58.5988L61.3271 58.5442C61.4675 58.3142 61.6063 58.0842 61.7446 57.855C62.4096 56.755 63.0654 55.6696 63.8075 54.6696C64.7379 53.4183 68.1858 49.5054 72.6525 52.2921C75.4975 54.0463 77.89 56.42 80.45 58.9613C81.4263 59.9329 82.1217 61.0379 82.5867 62.225Z" fill="#E4E4E4" />
                    </svg>
                </Box>
                <Box width="43%">
                    <Text fontSize="20px" fontWeight={600} color="#191919">None</Text>
                    <Box mt={7}>
                        <Text fontSize="16px" fontWeight={600} color={type === "outstanding" ? "#FF6A6A" : "#CBCBCB"}>{type === "outstanding" ? "₦ " + parseFloat(cost).toFixed(2) : amount}</Text>
                        <Text fontSize={10} color="#606060" fontWeight={400}>{text}</Text>
                    </Box>
                    <Box className="overview-outstanding-pointers">
                        <Text>1 / 5</Text>
                        <Box className='bg-pointers'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 12L14 6L14 18L8 12Z" fill="#919191" />
                        </svg></Box>
                        <Box className='bg-pointers'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_1061)">
                                <path d="M16 12L10 18V6L16 12Z" fill="#191919" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1061">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
