import { useRouter } from 'next/router';
import { Button, Input, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { Flex } from '../styles/flex';

export const Accounts = () => {
   const [clientId, setClientId] = useState('');
   const [error, setError] = useState('');
   const router = useRouter();

   const handleFetch = async () => {
      if (!clientId) {
         setError('Client ID cannot be empty');
         return;
      }
      setError('');

      try {
         const response1 = await fetch(`http://127.0.0.1:8001/${clientId}/search`);
         if (!response1.ok) {
            throw new Error(`Failed to fetch data from search API: ${response1.statusText}`);
         }
         const searchData = await response1.json();

         const response2 = await fetch(`http://127.0.0.1:8001/${clientId}/esg`);
         if (!response2.ok) {
            throw new Error(`Failed to fetch data from ESG API: ${response2.statusText}`);
         }
         const esgData = await response2.json();

         const response3 = await fetch(`http://127.0.0.1:8001/${clientId}/product`);
         if (!response3.ok) {
            throw new Error(`Failed to fetch data from Product API: ${response3.statusText}`);
         }
         const productData = await response3.json();

         const response4 = await fetch(`http://127.0.0.1:8001/${clientId}/event`);
         if (!response4.ok) {
            throw new Error(`Failed to fetch data from Event API: ${response4.statusText}`);
         }
         const eventData = await response4.json();

         console.log('Search Data:', searchData);
         console.log('ESG Data:', esgData);
         console.log('Product Data:', productData);
         console.log('Event Data:', eventData);

         router.push({
            pathname: '/',
            query: {
               searchData: JSON.stringify(searchData),
               esgData: JSON.stringify(esgData),
               productData: JSON.stringify(productData),
               eventData: JSON.stringify(eventData),
            },
         });
      } catch (err) {
         setError(err.message);
      }
   };

   return (
      <Flex
         justify="center"
         align="center"
         direction="column"
         css={{
            height: '100vh',
            px: '$6',
            transform: 'translateY(-50px)', // 向上移动
         }}
      >
         <Flex css={{ gap: '$6' }} align="center">
            <Input
               placeholder="Enter Client ID"
               value={clientId}
               onChange={(e) => setClientId(e.target.value)}
               css={{ width: '100%', maxW: '410px' }}
            />
            <Button onPress={handleFetch}>Fetch Data</Button>
         </Flex>
         {error && <Text color="error">{error}</Text>}
      </Flex>
   );
};
