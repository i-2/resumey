import React, { Component } from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import { ProgressBar } from './ProgressBar';
import { PersonalDetails } from './PersonalDetails';


export default class App extends Component<any> {
    render() {
        return (<Container maxW="10xl" centerContent>
            <Box> <Text fontSize="3xl"> Resume Builder </Text> </Box>
            <ProgressBar value={40} />
            <PersonalDetails schema={[{ "title": "Name", "name": "name" }, { "title": "Email", "name": "email" }]} />
        </Container>)
    }
}