import React from 'react';
import {
    Flex, Button, Wrap, WrapItem, Text, Center
} from '@chakra-ui/react';
import {
    FieldArray,
    Formik,
} from 'formik';
import * as Yup from 'yup';

import { ChakraDateField, ChakraField, ChakraStarField } from './FormComponents';

export function renderButtons({ onAddMore, onPrevious, onSubmit }: any) {
    return (
        <Flex>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={false}
                onClick={onAddMore}
                m="5"
            >
                Add More
            </Button>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={false}
                onClick={onPrevious}
                m="5"
            >
                Previous
            </Button>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={false}
                type="submit"
                onClick={onSubmit}
                m="5"
            >
                Next
            </Button>
        </Flex>
    )
}


function renderFormField(name: string, fields: any, index: number, value: any) {

    function renderWidth(type: string) {
        return type == "text" ? "92%" : "45%";
    }

    return fields.map((field: any, i: number) => {
        if (field.type == "date") {
            return (
                <WrapItem key={`${index}-${i}`} width={renderWidth(field.type)} margin="10px" >
                    <ChakraDateField name={`${name}[${index}].${field.name}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        title={field.title}
                        defaultValue={value[field.name]} /></WrapItem>
            )
        } else if (field.type == "star") {
            return (
                <WrapItem key={`${index}-${i}`} width={renderWidth(field.type)} margin="10px" >
                    <ChakraStarField
                        name={`${name}[${index}].${field.name}`}
                        title={field.title}
                        defaultValue={value[field.name]} />
                </WrapItem>
            )
        } else {
            return (
                <WrapItem key={`${index}-${i}`} width={renderWidth(field.type)} margin="10px">
                    <ChakraField
                        name={`${name}[${index}].${field.name}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        title={field.title}
                        defaultValue={value[field.name]}
                    /></WrapItem>
            )
        }
    }
    
}



function renderFieldArray({ name, fields, values }: any) {
    return (
        <FieldArray name={name}>
            {

                (_: any) => values[name].map((value: any, index: number) => (
                    <Wrap key={index} width="100%" borderWidth="1px" borderRadius="lg" padding="5%" marginTop="2%">
                        {renderFormField(name, fields, index, value)}
                    </Wrap>))
            }
        </FieldArray>)
}


function renderEmptyNotice() {
    return (
        <Flex width="100%" borderWidth="1px" borderRadius="lg" padding="5%" marginTop="2%">
            <Center><Text> Click on Add More !! </Text></Center>
        </Flex>
    )
}

function calculateValidationScheme(formName: string, fields: any) {
    let fieldLevelValidation: any = {};
    for (let field of fields) {
        fieldLevelValidation[field.name] = field.validate;
    }
    let formFields: any = {};
    formFields[formName] = Yup.array().of(
        Yup.object().shape(fieldLevelValidation)
    )
    return Yup.object().shape(formFields);
}


export const ArrayForm = (props: any) =>
(
    <Flex width="100%" direction="row" justify="center" margin="2%">
        <Formik
            initialValues={props.initValues}
            validationSchema={calculateValidationScheme(props.name, props.fields)}
            onSubmit={(values, actions) => {
                props.onSubmit(values[props.name]);
                props.onNext();
            }}>
            {
                ({ handleSubmit, errors }: any) => (
                    <Flex width="100%" direction="column" justify="center">
                        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                            {props.initValues[props.name].length > 0 ? renderFieldArray({ name: props.name, fields: props.fields, values: props.initValues }) : renderEmptyNotice()}
                            {renderButtons({ onPrevious: props.onPrevious, onAddMore: props.onAddMore, onSubmit: handleSubmit })}
                        </form>
                    </Flex>
                )

            }

        </Formik>
    </Flex>
)