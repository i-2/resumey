import React, { useEffect, useState } from 'react';
import {
    FormControl, FormLabel, Input, FormErrorMessage, Textarea
} from '@chakra-ui/react';
import {
    useField, useFormikContext,
} from 'formik';
import DatePicker from "react-datepicker";
import StarRatingComponent from 'react-star-rating-component';
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

export function ChakraField(props: FieldProp) {
    const { setFieldValue } = useFormikContext();
    const HCType: React.ElementType = getComponent(props.type);
    const [field, meta, _] = useField(props);
    const [defaultValue, setState] = useState(props.defaultValue);
    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            <FormLabel htmlFor={props.name}> {props.title} </FormLabel>

            <HCType {...field} {...props} value={defaultValue} onChange={(value) => {
                const currentValue = value.currentTarget.value;
                setState(currentValue);
                setFieldValue(field.name, currentValue);
            }} />

            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )

}

export const ChakraDateField = (props: FieldProp) => {
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
                showYearDropdown
                customInput={<Input />}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>

    );
};

export const ChakraStarField = (props: any) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, _] = useField(props);
    const [stars, setStars] = useState(props.defaultValue ? props.defaultValue : 1);
    return (
        <FormControl>
            <FormLabel htmlFor={props.name}> {props.title} </FormLabel>
            <StarRatingComponent 
                name={props.name}
                startCount={5}
                value={stars}
                onStarClick={(v: number) => {
                    setFieldValue(field.name, v);
                    setStars(v);
                }}
                style={{fontSize: '25px'}}
            />
        </FormControl>
    )
}