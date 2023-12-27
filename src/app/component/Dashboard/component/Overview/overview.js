'use client'

import { Box, Text, SimpleGrid } from '@chakra-ui/react';

export default function Overview() {
    const OverviewContent = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z" fill="#4545FE" />
                <path d="M17 17.9929V23.9929H21C22.6568 23.9929 24 22.6497 24 20.9929V11.8719C24.0002 11.3524 23.7983 10.8532 23.437 10.4799L14.939 1.29285C13.4396 -0.329491 10.9089 -0.4291 9.28655 1.07034C9.20949 1.14159 9.13523 1.21579 9.06403 1.29285L0.581016 10.4769C0.208734 10.8517 -0.000140554 11.3586 7.09607e-08 11.8869V20.9929C7.09607e-08 22.6497 1.34316 23.9929 3 23.9929H6.99998V17.9929C7.01869 15.2661 9.22027 13.0393 11.8784 12.9752C14.6255 12.9089 16.9791 15.1736 17 17.9929Z" fill="#4545FE" />
                <path d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z" fill="#4545FE" />
            </svg>,
            title: "property overview",
            info: [
                {
                    title: "total",
                    number: 0
                },
                {
                    title: "available",
                    number: 0
                },
                {
                    title: "sold out",
                    number: 0
                }
            ]
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z" fill="#4545FE" />
            </svg>,
            title: "customer overview",
            info: [
                {
                    title: "total",
                    number: 0
                },
                {
                    title: "new",
                    number: 0
                },
                {
                    title: "active",
                    number: 0
                },
                {
                    title: "inactive",
                    number: 0
                }
            ]
        }
    ]
    return (
        <Box width="36%" display="flex" flexDirection="column" alignItems="cemter" justifyContent="space-between" height="100%">
            {
                OverviewContent.map((content, index) => {
                    return <>
                        <Box key={index} className='Overview-box'>
                            <Box display="flex" width="100%" alignItems={'center'} justifyContent="space-between">
                                <Box display="flex" alignItems={'center'}>
                                    {content.svg}
                                    <Text fontSize={14} fontWeight={500} ml={2} color="#3D3D3D" textTransform="capitalize">{content.title}</Text>
                                </Box>
                                <Box color="#CBCBCB" display="flex">
                                    <Text fontSize={12} fontWeight={500} textTransform="lowercase">
                                        view all
                                    </Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clip-path="url(#clip0_1_1034)">
                                            <path d="M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z" fill="#CBCBCB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1034">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Box>

                            </Box>
                            <Box display="flex" alignItems="center" justifyContent={"space-between"} width="100%">
                                {
                                    content.info.map((info, index) => {
                                        return <>
                                            <Box key={index} border="1px solid #F5F5F5" display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" borderRadius={12} background={"#fff"} width={89} height={79}>
                                                <Text fontSize={24} fontWeight={600} color="#191919">{info.number}</Text>
                                                <Text fontSize={14} fontWeight={400} color="#606060">{info.title}</Text>
                                            </Box>
                                        </>
                                    })

                                }
                            </Box>


                        </Box>
                    </>
                })
            }
        </Box>
    )
}