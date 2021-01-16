import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Details } from './Details';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Wizard } from './Wizard';
import { EmploymentHistory } from './EmploymentHistory';
import * as Yup from 'yup';

const PERSONAL_DETAIL_SCHEMA: any[] = [
    { "title": "First Name", "name": "firstName", "validate": Yup.string().required() },
    { "title": "Last Name", "name": "lastName", "validate": Yup.string().required() },
    { "title": "Email", "name": "email", "validate": Yup.string().email().required() },
    { "title": "Phone Number", "name": "phone", "validate": Yup.string().required() },
    { "title": "Country", "name": "country", "validate": Yup.string().required() },
    { "title": "City", "name": "city", "validate": Yup.string().required() },
    { "title": "Address", "name": "address", "validate": Yup.string().required() },
    { "title": "Postal Code", "name": "pinCode", "validate": Yup.string().required() }
]


export const _App = (props: any) => {
    console.log(props.employment);
    return (
        <Flex direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto">
            <Flex w="100%" justify="center">
                <Text fontSize="3xl"> Resume Builder </Text>
            </Flex>
            <Wizard tabs={
                [
                    {
                        "title": "Personal Details", "component": <Details
                            schema={PERSONAL_DETAIL_SCHEMA}
                            initValues={props.initValues}
                            onNext={() => props.updateWizard(1)}
                            submitValues={(values: any) => props.updatePersonalDetail(values)}
                        />
                    },
                    {
                        "title": "Professional Summary", "component": <ProfessionalSummary
                            title="Summary"
                            name="summary"
                            initValues={props.summary}
                            onNext={() => props.updateWizard(2)}
                            onPrev={() => props.updateWizard(0)}
                            submitValues={(values: any) => props.updateProfSummary(values)}
                        />
                    },
                    {
                        "title": "Employment History", "component": <EmploymentHistory 
                            history={props.employment}
                            onPrevious={() => props.updateWizard(1)}
                            onAddMore={() => props.addMoreDetail()}
                        />
                    }
                ]
            } count={props.count} />
        </Flex>
    )
}

const mapStateToProps = (state: any) => (
    {
        count: state.wizard.windowCount,
        initValues: state.personalDetail,
        summary: state.profSummary,
        employment: state.employment
    })
const mapDispatchToProps = (dispatch: any) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(_App);