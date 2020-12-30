import React from 'react';
import {
    Box, Button, FormControl, FormLabel, Input, FormErrorMessage, Heading, Wrap, WrapItem
} from '@chakra-ui/react';
import {
    Form,
    Field,
    Formik,
} from 'formik';


export interface ValueProps {
    name: string,
    title: string
}

export interface PersonalDetailProps {
    schema: ValueProps[]
}


export function renderField(values: ValueProps[]) {
    return (<Wrap>
        {values.map((value: any, i: number) => <WrapItem w="45%" m="5"><Field key={i} name={value.name}>
            {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor={value.name}> {value.title} </FormLabel>
                    <Input {...field} id={value.name} placeholder={value.title} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
            )}
        </Field></WrapItem>)}
    </Wrap>)
}



export const PersonalDetails = (props: ) => (
    <Box width="inherit" borderRadius="50" m="5" centerContent>
        <Heading> Personal Details </Heading>
        <Formik
            initialValues={{}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>

            <Form>
                {renderField(props.schema)}
                <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                    m="5"
                >
                    Submit
                </Button>
            </Form>

        </Formik>

    </Box>
)