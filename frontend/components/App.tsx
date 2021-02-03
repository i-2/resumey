import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Details } from './Details';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Wizard } from './Wizard';
import { EmploymentHistory } from './EmploymentHistory';
import { EducationHistory } from './EducationHistory';
import { SkillDetails } from './SkillDetails';
import { ThemeSelector } from './Selector';

import * as Yup from 'yup';

const UrlValidator = Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    )
    .required('Please enter website');

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

const SOCIAL_SCHEMA: any[] = [
    { "title": "LinkedIn", "name": "linkedin", "validate": UrlValidator },
    { "title": "Twitter", "name": "twitter", "validate": UrlValidator },
    { "title": "Github", "name": "github", "validate": UrlValidator }
]

export const _App = (props: any) => {
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
                            initValues={props.personal}
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
                            onAddMore={() => props.addMoreEmpDetail()}
                            onNext={() => props.updateWizard(3)}
                            onSave={(values: any[]) => props.updateEmpDetails(values)}
                        />
                    },
                    {
                        "title": "Education History", "component": <EducationHistory
                            education={props.education}
                            onPrevious={() => props.updateWizard(2)}
                            onNext={() => props.updateWizard(4)}
                            onAddMore={() => props.addMoreEducationDetail()}
                            onSave={(values: any[]) => props.updateEducationDetails(values)}
                        />
                    }, {
                        "title": "Skills", "component": <SkillDetails
                            skills={props.skills}
                            onPrevious={() => props.updateWizard(3)}
                            onNext={() => props.updateWizard(5)}
                            onAddMore={() => props.addMoreSkillDetail()}
                            onSave={(values: any[]) => props.updateSkillDetails(values)} />
                    },
                    {
                        "title": "Social Details", "component": <Details
                            schema={SOCIAL_SCHEMA}
                            initValues={props.social}
                            onNext={() => props.updateWizard(6)}
                            onPrevious={() => props.updateWizard(4)}
                            submitValues={(values: any) => props.updateLinks(values)}
                        />
                    },
                    {
                        "title": "Select Theme", "component": <ThemeSelector
                            onPrev={() => props.updateWizard(5)}
                            onNext={() => props.updateWizard(7)}
                            onChange={(e: any) => props.updateTheme(e.currentTarget.value)}
                            value={props.theme}
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
        personal: state.personalDetail,
        summary: state.profSummary,
        employment: state.employment,
        education: state.education,
        skills: state.skill,
        social: state.social,
        theme: state.theme.theme
    })
const mapDispatchToProps = (dispatch: any) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(_App);