import React from 'react';
import {
    Flex, FormControl, FormLabel, Textarea, FormErrorMessage, Button
} from '@chakra-ui/react';
import {
    Field,
    Formik,
} from 'formik';
import * as Yup from 'yup';

const SummarySchema = Yup.object().shape(
    { "summary": Yup.string().required() }
)

export interface ProfessionalSummaryProps {
    name: string,
    title: string,
    initValues: any,
    onNext: () => any,
    onPrev: () => any,
    submitValues: (values: any) => any
}

export function ProfessionalSummary(props: ProfessionalSummaryProps) {
    const { name, title } = props;
    return (

        <Flex width="100%" direction="row" justify="center">
            <Formik
                initialValues={props.initValues}
                validationSchema={SummarySchema}
                onSubmit={(values, actions) => {
                    props.onNext();
                    props.submitValues(values);
                }}>
                {
                    (innerProps: any) => (
                        <Flex width="100%" direction="column" justify="center">
                            <form style={{ width: "100%" }} onSubmit={innerProps.handleSubmit}>
                                <Field name={name}>
                                    {({ field, form }: any) => {

                                        return (

                                            <FormControl isInvalid={form.errors.summary && form.touched.summary}>
                                                <FormLabel htmlFor={name}> {title} </FormLabel>
                                                <Textarea placeholder="Enter your professional summary"  {...field} />
                                                <FormErrorMessage>{form.errors.summary}</FormErrorMessage>
                                            </FormControl>

                                        )
                                    }
                                    }
                                </Field>
                                <Button
                                    mt={4}
                                    colorScheme="teal"
                                    isLoading={false}
                                    onClick={props.onPrev}
                                    m="5"
                                >
                                    Previous
                                </Button>
                                <Button
                                    mt={4}
                                    colorScheme="teal"
                                    isLoading={false}
                                    type="submit"
                                    m="5"
                                >
                                    Next
                                </Button>
                            </form>
                        </Flex>
                    )
                }

            </Formik>
        </Flex>

    );
}