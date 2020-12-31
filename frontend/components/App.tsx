import React, { Component } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { ProgressBar } from './ProgressBar';
import { PersonalDetails } from './PersonalDetails';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Wizard } from './Wizard';

const PERSONAL_DETAIL_SCHEMA: any[] = [
    { "title": "First Name", "name": "firstName" },
    { "title": "Last Name", "name": "lastName" },
    { "title": "Email", "name": "email" },
    { "title": "Phone Number", "name": "phone" },
    { "title": "Country", "name": "country" },
    { "title": "City", "name": "city" },
    { "title": "Address", "name": "address" },
    { "title": "Postal Code", "name": "pinCode" }
]
export default class App extends Component<any> {
    render() {
        return (<Flex direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto">
            <Flex w="100%" justify="center"> <Text fontSize="3xl"> Resume Builder </Text> </Flex>
            <Flex w="100%" justify="center"><ProgressBar value={40} /></Flex>
            <Wizard tabs={
                [
                    { "title": "Personal Details", "component": <PersonalDetails schema={PERSONAL_DETAIL_SCHEMA} /> },
                    { "title": "Professional Summary", "component": <ProfessionalSummary title="Summary" name="summary" /> }
                ]
            } />
        </Flex>)
    }
}