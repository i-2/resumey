import React from 'react';
import {
    Flex, Button, FormControl, FormLabel, Input, FormErrorMessage, Text, Wrap, WrapItem
} from '@chakra-ui/react';
import {
    Form,
    Field,
    Formik
} from 'formik';


export interface ValueProps {
    name: string,
    title: string
}

export interface PersonalDetailProps {
    schema: ValueProps[],
    onNext: () => any;
}

function getValues(schema: ValueProps[]) {
    let values: any = {};
    for (let value of schema) {
        values[value.name] = "";
    }
    return values;
}


export function renderField(values: ValueProps[]) {
    return (<Wrap width="100%">
        {values.map((value: any, i: number) => <WrapItem key={i} width="45%" margin="10px"><Field name={value.name}>
            {({ field, form }: any) => (
                <FormControl isInvalid={form.errors[value.name] && form.touched[value.name]}>
                    <FormLabel htmlFor={value[value.name]}> {value.title} </FormLabel>
                    <Input {...field} id={value[value.name]} placeholder={value.title} />
                    <FormErrorMessage>{form.errors[value.name]}</FormErrorMessage>
                </FormControl>
            )}
        </Field></WrapItem>)}
    </Wrap>)
}



export const Details = (props: PersonalDetailProps) => (
    <Flex width="100%" direction="row" justify="center">
        <Formik
            initialValues={getValues(props.schema)}
            onSubmit={() => { }}>
            {
                (innerProps: any) => (
                    <Flex width="100%" direction="column" justify="center">
                        <form style={{ width: "100%" }} onSubmit={innerProps.handleSubmit}>
                            <Flex width="100%" direction="row" justify="space-between">
                                {renderField(props.schema)}
                            </Flex>
                            <Button
                                mt={4}
                                colorScheme="teal"
                                type="submit"
                                m="5"
                                onClick={props.onNext}
                            >
                                Next
                            </Button>

                        </form>
                    </Flex>
                )
            }

        </Formik>
    </Flex>
)