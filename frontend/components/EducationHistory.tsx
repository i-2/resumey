import React from 'react';
import { ArrayForm } from './chakraForms/ArrayForm';
import * as Yup from 'yup';


const EDUCATION_FIELDS = [
    { name: "school", title: "School", placeholder: "Enter the name of school", "type": "input", "validate": Yup.string().required() },
    { name: "degree", title: "Degree", placeholder: "Enter the name of degree", "type": "input", "validate": Yup.string().required() },
    { name: "start", title: "Start Date", placeholder: "Enter the start date", "type": "date", "validate": Yup.date().required() },
    { name: "end", title: "End Date", placeholder: "Enter the end date", "type": "date", "validate": Yup.date().required() },
    { name: "city", title: "City", placeholder: "Enter the place of study", "type": "input", "validate": Yup.string().required()},
    { name: "country", title: "Country", placeholder: "Enter the country of country", "type": "input", "validate": Yup.string().required()},
    { name: "description", title: "Description", placeholder: "Care to explain ?", "type": "text", "validate": Yup.string().required() }
]


export const EducationHistory = (props: any) => <ArrayForm
    name="education"
    fields={EDUCATION_FIELDS}
    initValues={{ "education": props.education }}
    onPrevious={props.onPrevious}
    onAddMore={props.onAddMore}
    onSubmit={props.onSave}
    onNext={props.onNext}
/>