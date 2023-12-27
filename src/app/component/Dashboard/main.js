import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import SalesOverview from "./component/salesOverview/salesOverview";
import Overview from './component/Overview/overview';
import ListingOverview from './component/listingOverview/listingOverview';
import Ledger from "./component/ledger/ledger";
export default function Main() {
    return (
        <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" alignItems='start' backgroundColor="#FBFCFC" pr={78} pl={78} pt={17} pb={17}>
            <Box>
                <Box display="flex" alignItems={"center"}>
                    <Image src="/images/hi.svg" alt='hi' width={29} height={29} />
                    <Heading fontSize={20} fontWeight={600}>Hi Ahmed</Heading>
                </Box>
                <Text>Welcome to your Dashboard</Text>
            </Box>
            <Box width="100%" height={365} display="flex" justifyContent="space-between" alignItems="center">
                <SalesOverview />
                <Overview />
            </Box>

            <SimpleGrid columns={3} spacing={5} width={"100%"} mt={2}>
                <ListingOverview/>
                <Ledger type="outstanding" title="" subTitle="Total Outstanding Balance" cost={0} amount={0} text="Outstanding Balance"/>
                <Ledger type="sold" title="Top Selling" subTitle="Total sold" cost={0} amount={0} text="Whole units sold"/>
            </SimpleGrid>

        </Box>

    )
}