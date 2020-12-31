import React from 'react';
import {
    Flex, FormControl, FormLabel, Textarea, FormErrorMessage
} from '@chakra-ui/react';
import {
    Form,
    Field,
    Formik,
} from 'formik';

export function ProfessionalSummary(props: any) {
    const title = props.title;
    const name = props.name;
    return (

        <Flex width="100%" direction="row" justify="center">
            <Formik
                initialValues={{}}
                onSubmit={(values, { setSubmitting }) => { }}>
                <Flex width="100%" direction="column" justify="center">
                    <Form style={{ width: "100%" }}>
                        <Field>
                            {({ field, form }: any) => (

                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor={name}> {title} </FormLabel>
                                    <Textarea name={name} placeholder="Enter your professional summary" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>

                            )}
                        </Field>
                    </Form>
                </Flex>
            </Formik>
        </Flex>

    );
}