import React from 'react';
import { Box } from '../styles/box';
import clientData from '../../client.json'; // Import client.json
import events from "../../event.json";
import products from "../../product.json";
import { Avatar, Card, Text } from '@nextui-org/react';

export const Steam = ({ productData, eventData }) => {
  if (!productData|| !eventData) {
    return <Text>No client data available</Text>;
  }
  return (
    <Box
      css={{
        width: '100%',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Product Recommendations */}
      <Box
        css={{
          padding: '20px',
          backgroundColor: '#fff9e6',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h4>Product Recommendations</h4>
        <Box
          css={{
            padding: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '900px', // Limit the width
          }}
        >
          <p>{productData.product_1}</p>
        </Box>
        <Box
          css={{
            padding: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '900px', // Limit the width
          }}
        >
          <p>{productData.product_2}</p>
        </Box>
      </Box>

      {/* Event Information */}
      <Box
        css={{
          padding: '20px',
          backgroundColor: '#e5f7ff',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h4>Event Highlights</h4>
        <Box
          css={{
            padding: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '900px', // Limit the width
          }}
        >
          <p>{eventData.event_1}</p>
        </Box>
        <Box
          css={{
            padding: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '900px', // Limit the width
          }}
        >
          <p>{eventData.event_2}</p>
        </Box>
      </Box>
    </Box>
  );
};
