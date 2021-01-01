import React from 'react';
import {
    Flex, Button, FormControl, FormLabel, Input, FormErrorMessage, Text, Wrap, WrapItem
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
    schema: ValueProps[],
    onNext: () => any;
}


export function renderField(values: ValueProps[]) {
    return (<Wrap width="100%">
        {values.map((value: any, i: number) => <WrapItem key={i} width="45%" margin="10px"><Field name={value.name}>
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



export const PersonalDetails = (props: PersonalDetailProps) => (
    <Flex width="100%" direction="row" justify="center">
        <Formik
            initialValues={{}}
            onSubmit={(values, { setSubmitting }) => { }}>
            <Flex width="100%" direction="column" justify="center">
                <Form style={{ width: "100%" }}>
                    <Flex width="100%" direction="row" justify="space-between">
                        {renderField(props.schema)}
                    </Flex>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={false}
                        type="submit"
                        m="5"
                        onClick={props.onNext}
                    >
                        Next
                        </Button>

                </Form>
            </Flex>
        </Formik>
    </Flex>


)