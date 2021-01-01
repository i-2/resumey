import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Details } from './Details';
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
export const _App = (props: any) => (
    <Flex direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto">
        <Flex w="100%" justify="center">
            <Text fontSize="3xl"> Resume Builder </Text>
        </Flex>
        <Wizard tabs={
            [
                { "title": "Personal Details", "component": <Details schema={PERSONAL_DETAIL_SCHEMA} onNext={() => props.updateWizard(1)} /> },
                { "title": "Professional Summary", "component": <ProfessionalSummary title="Summary" name="summary" onNext={() => props.updateWizard(2)} onPrev={() => props.updateWizard(0)} /> }
            ]
        } count={props.count} />
    </Flex>
)

const mapStateToProps = (state: any) => ({ count: state.wizard.windowCount })
const mapDispatchToProps = (dispatch: any) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(_App);