import React from 'react';
import {
    Flex, Button, FormControl, FormLabel, Input, FormErrorMessage, Wrap, WrapItem
} from '@chakra-ui/react';
import {
    Field,
    Formik
} from 'formik';
import * as Yup from 'yup';

export interface ValueProps {
    name: string,
    title: string,
    validate?: any
}

export interface DetailProps {
    schema: ValueProps[],
    initValues: any,
    onNext: () => any,
    submitValues: (value: any) => any
    onPrevious?: () => any
}

function getValues(schema: ValueProps[]) {
    let values: any = {};
    for (let value of schema) {
        values[value.name] = "";
    }
    return values;
}

function getValidation(schema: ValueProps[]) {
    let values: any = {};
    for (let value of schema) {
        values[value.name] = value.validate;
    }
    return Yup.object().shape(values);
}


export function renderField(values: ValueProps[]) {
    return (<Wrap width="100%" borderWidth="1px" borderRadius="lg" padding="5%" marginTop="2%">
        {
            values.map((value: any, i: number) =>
                <WrapItem key={i} width="45%" margin="10px">
                    <Field name={value.name}>
                        {({ field, form }: any) => (
                            <FormControl isInvalid={form.errors[value.name] && form.touched[value.name]}>
                                <FormLabel htmlFor={value[value.name]}> {value.title} </FormLabel>
                                <Input {...field}
                                    id={value[value.name]}
                                    placeholder={value.title}
                                />
                                <FormErrorMessage>{form.errors[value.name]}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                </WrapItem>)}
    </Wrap>)
}



export const Details = (props: DetailProps) => {

    return (<Flex width="100%" direction="row" justify="center">
        <Flex width="100%" direction="column" justify="center">
            <Formik
                initialValues={props.initValues}
                validationSchema={getValidation(props.schema)}
                onSubmit={(values, actions) => {
                    props.submitValues(values);
                    props.onNext();
                }}>
                {
                    (innerProps: any) => (
                        <form style={{ width: "100%" }} onSubmit={innerProps.handleSubmit}>
                            <Flex width="100%" direction="row" justify="space-between">
                                {renderField(props.schema)}
                            </Flex>
                            {
                                props.onPrevious ? <Button
                                    mt={4}
                                    colorScheme="teal"
                                    type="submit"
                                    m="5"
                                    onClick={props.onPrevious}
                                >
                                    Previous </Button> : <div></div>
                            }
                            <Button
                                mt={4}
                                colorScheme="teal"
                                type="submit"
                                m="5"
                            >
                                Next
                            </Button>


                        </form>
                    )
                }
            </Formik>
        </Flex>
    </Flex >)
}