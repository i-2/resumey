import * as React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

export default (props: any) => {
    return (
        <Flex width="100%" direction="column" justify="center" borderWidth="1px" borderRadius="lg" padding="5%" marginTop="2%"> 
            <Flex width="100%" direction="row" justify="center" padding="5%" marginTop="2%"><Heading>  Almost Complete! </Heading> </Flex>
            <Flex width="100%" direction="row" justify="center" padding="5%" marginTop="2%"><Button colorScheme="teal"> Publish Now </Button></Flex>
        </Flex>
    )
}