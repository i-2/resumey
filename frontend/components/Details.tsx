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
    values: any,
    onNext: () => any,
    onDetailChange: (name: any, value: any) => any
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


export function renderField(values: ValueProps[], props: any) {
    return (<Wrap width="100%">
        {values.map((value: any, i: number) => <WrapItem key={i} width="45%" margin="10px"><Field name={value.name}>
            {({ field, form }: any) => (
                <FormControl isInvalid={form.errors[value.name] && form.touched[value.name]}>
                    <FormLabel htmlFor={value[value.name]}> {value.title} </FormLabel>
                    <Input {...field} id={value[value.name]} placeholder={value.title} value={props.values[value.name]} onChange={(e) => { props.onDetailChange(value.name, e.target.value) }} />
                    <FormErrorMessage>{form.errors[value.name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field></WrapItem>)}
    </Wrap>)
}



export const Details = (props: DetailProps) => (
    <Flex width="100%" direction="row" justify="center">
        <Flex width="100%" direction="column" justify="center">
            <Formik
                initialValues={getValues(props.schema)}
                validationSchema={getValidation(props.schema)}
                onSubmit={(values, actions) => {
                    props.onNext();
                }}>
                {
                    (innerProps: any) => (
                        <form style={{ width: "100%" }} onSubmit={innerProps.handleSubmit}>
                            <Flex width="100%" direction="row" justify="space-between">
                                {renderField(props.schema, props)}
                            </Flex>
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
    </Flex >
)