import { Avatar, Card, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const CardAgents = ({ clientData }) => {
  if (!clientData || !clientData.client_profile) {
    return <Text>No client data available</Text>;
  }
  const { client_profile } = clientData;

  return (
    <Card
      css={{
        mw: '375px',
        bg: '$accents0',
        height: 'auto',
        borderRadius: '$xl',
        alignContent: 'center',
        justifyContent: 'center',
        px: '$6',
      }}
    >
      <Card.Body css={{ py: '$10', gap: '$4' }}>
        <Flex css={{ flexDirection: 'column', gap: '$4' }}>
          <Text  css={{ textAlign: 'center' }}>
            {client_profile.name}
          </Text>
          <Text
            css={{
              textAlign: 'center',
              color: 'blue',
              fontWeight: 'bold',
            }}
          >
            {client_profile.business_name}
          </Text>
          <Box css={{ py: '$4', px: '$2', border: '1px solid $accents2', borderRadius: '$md' }}>
            <Text b>Contact Info:</Text>
            <Text>Email: {client_profile.contact_info.email}</Text>
            <Text>Phone: {client_profile.contact_info.phone}</Text>
          </Box>
          <Box css={{ py: '$4', px: '$2', border: '1px solid $accents2', borderRadius: '$md' }}>
            <Text b>Address:</Text>
            <Text>{client_profile.address}</Text>
          </Box>
          <Box css={{ py: '$4', px: '$2', border: '1px solid $accents2', borderRadius: '$md' }}>
            <Text b>Relationship Manager:</Text>
            <Text>{client_profile.relationship_manager}</Text>
          </Box>
        </Flex>
      </Card.Body>
    </Card>
  );
};
