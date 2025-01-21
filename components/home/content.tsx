import React, { useEffect, useState } from 'react';
import { Text, Link, Button } from '@nextui-org/react';
import { Box } from '../styles/box';
import dynamic from 'next/dynamic';
import { Flex } from '../styles/flex';
import { useRouter } from 'next/router';
import { CardBalance1 } from './card-balance1';
import { CardBalance2 } from './card-balance2';
import { CardBalance3 } from './card-balance3';
import { CardAgents } from './card-agents';
import { CardTransactions } from './card-transactions';

const Chart = dynamic(
   () => import('../charts/steam').then((mod) => mod.Steam),
   {
      ssr: false,
   }
);

export const Content = () => {
   const router = useRouter();
   const [searchData, setSearchData] = useState(null);
   const [esgData, setEsgData] = useState(null);
   const [productData, setProductData] = useState(null);
   const [eventData, setEventData] = useState(null);

   useEffect(() => {
      if (router.query.searchData) {
         try {
            const parsedSearchData = JSON.parse(router.query.searchData);
            setSearchData(parsedSearchData);
         } catch (error) {
            console.error('Failed to parse search data:', error);
         }
      }
      if (router.query.esgData) {
         try {
            const parsedEsgData = JSON.parse(router.query.esgData);
            setEsgData(parsedEsgData);
         } catch (error) {
            console.error('Failed to parse ESG data:', error);
         }
      }
      if (router.query.productData) {
         try {
            const parsedProductData = JSON.parse(router.query.productData);
            setProductData(parsedProductData);
         } catch (error) {
            console.error('Failed to parse Product data:', error);
         }
      }
      if (router.query.eventData) {
         try {
            const parsedEventData = JSON.parse(router.query.eventData);
            setEventData(parsedEventData);
         } catch (error) {
            console.error('Failed to parse Event data:', error);
         }
      }
   }, [router.query]);

   const handleResetAndNavigate = () => {
      // Clear the state data
      setSearchData(null);
      setEsgData(null);
      setProductData(null);
      setEventData(null);

      // Navigate back to the Accounts page
      router.push('/accounts');
   };

   return (
      <Box css={{ overflow: 'hidden', height: '100%' }}>
         <Flex
            css={{
               'gap': '$8',
               'pt': '$5',
               'height': 'fit-content',
               'flexWrap': 'wrap',
               '@lg': {
                  flexWrap: 'nowrap',
               },
               '@sm': {
                  pt: '$10',
               },
            }}
            justify={'center'}
         >
            <Flex
               css={{
                  'px': '$12',
                  'mt': '$8',
                  '@xsMax': { px: '$10' },
                  'gap': '$12',
               }}
               direction={'column'}
            >
               {/* Card Section Top */}
               <Box>
                  <Text
                     h3
                     css={{
                        'textAlign': 'center',
                        '@sm': {
                           textAlign: 'inherit',
                        },
                     }}
                  >
                     ESG Metrics
                  </Text>
                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        'justifyContent': 'center',
                        '@sm': {
                           flexWrap: 'nowrap',
                        },
                     }}
                     direction={'row'}
                  >
                     <CardBalance1 esgData={esgData} />
                     <CardBalance2 esgData={esgData} />
                     <CardBalance3 esgData={esgData} />
                  </Flex>
               </Box>

               {/* Chart */}
               <Box>
                  <Text
                     h3
                     css={{
                        'textAlign': 'center',
                        '@lg': {
                           textAlign: 'inherit',
                        },
                     }}
                  >
                     Things can discuss with this client:
                  </Text>
                  <Box
                     css={{
                        width: '100%',
                        backgroundColor: '$accents0',
                        boxShadow: '$lg',
                        borderRadius: '$2xl',
                        px: '$10',
                        py: '$10',
                     }}
                  >
                     <Chart productData={productData} eventData={eventData} />
                  </Box>
               </Box>

               {/* Reset Button */}
               <Box css={{ marginTop: '$8', textAlign: 'center' }}>
                  <Button onPress={handleResetAndNavigate} color="primary" auto>
                     Back to Search
                  </Button>
               </Box>
            </Flex>

            {/* Left Section */}
            <Box
               css={{
                  'px': '$12',
                  'mt': '$8',
                  'height': 'fit-content',
                  '@xsMax': { px: '$10' },
                  'gap': '$6',
                  'overflow': 'hidden',
               }}
            >
               <Text
                  h3
                  css={{
                     'textAlign': 'center',
                     '@lg': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  Client Info
               </Text>
               <Flex
                  direction={'column'}
                  justify={'center'}
                  css={{
                     'gap': '$8',
                     'flexDirection': 'row',
                     'flexWrap': 'wrap',
                     'width': '%',
                     '@sm': {
                        flexWrap: 'nowrap',
                     },
                     '@lg': {
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                     },
                  }}
               >
                  <CardAgents clientData={searchData} />
                  <CardTransactions data={searchData} />
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};
