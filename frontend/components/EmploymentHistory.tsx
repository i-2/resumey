import React from 'react';
import { ArrayForm } from './chakraForms/ArrayForm';
import * as Yup from 'yup';


const EMPLOYMENT_FIELDS = [
    { name: "employer", title: "Employer", placeholder: "Enter the name of employer", "type": "input", "validate": Yup.string().required() },
    { name: "designation", title: "Designation", placeholder: "Enter the designation", "type": "input", "validate": Yup.string().required() },
    { name: "start", title: "Start Date", placeholder: "Enter the start date", "type": "date", "validate": Yup.date().required() },
    { name: "end", title: "End Date", placeholder: "Enter the end date", "type": "date", "validate": Yup.date().required() },
    { name: "city", title: "City", placeholder: "Enter the place of employment", "type": "input", "validate": Yup.string().required()},
    { name: "country", title: "Country", placeholder: "Enter the country of employment", "type": "input", "validate": Yup.string().required()},
    { name: "summary", title: "Summary", placeholder: "Summary", "type": "text", "validate": Yup.string().required() }
]


export const EmploymentHistory = (props: any) => <ArrayForm
    name="history"
    fields={EMPLOYMENT_FIELDS}
    initValues={{ "history": props.history }}
    onPrevious={props.onPrevious}
    onAddMore={props.onAddMore}
    onSubmit={props.onSave}
    onNext={props.onNext}
/>