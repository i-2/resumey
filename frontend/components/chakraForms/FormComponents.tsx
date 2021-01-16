import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, FormErrorMessage, Textarea
} from '@chakra-ui/react';
import {
    Field, useField, useFormikContext,
} from 'formik';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export interface FieldProp {
    name: string,
    type: string,
    placeholder: string,
    title: string,
    defaultValue: any
}

function getComponent(type: string) {
    switch (type.toLowerCase()) {
        case 'input':
            return Input
        case 'text':
            return Textarea
        default:
            return Input
    }
}

export function renderType(type: string, field: any, form: any, meta: any, value: any, setFieldValue: any, placeholder: any) {
    const HCType: React.ElementType = getComponent(type);
    return <HCType {...field} onChange={setFieldValue} onSelect={setFieldValue} placeholder={placeholder} value={value} />
}


export function ChakraField({ name, type, title, placeholder, defaultValue }: FieldProp) {
    return (
        <Field name={name} >
            {({ field, form, meta, setFieldValue }: any) => (
                <FormControl isInvalid={meta.touched && meta.error}>
                    <FormLabel htmlFor={name}> {title} </FormLabel>

                    {renderType(type, field, form, meta, defaultValue, setFieldValue, placeholder)}

                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

export const ChakraDateField = (props : any) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, _] = useField(props);
    const [defaultValue, setState] = useState(props.defaultValue ? props.defaultValue : new Date());
    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            <FormLabel htmlFor={props.name}> {props.title} </FormLabel>
            <DatePicker
                {...field}
                {...props}
                selected={defaultValue}
                onChange={val => {
                    setFieldValue(field.name, val);
                    setState(val);
                }}
                onSelect={(val) => {
                    setFieldValue(field.name, val);
                    setState(val);
                }}
                customInput={<Input />}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>

    );
};