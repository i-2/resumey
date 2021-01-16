import React from 'react';
import { ArrayForm } from './chakraForms/ArrayForm';


const EMPLOYMENT_FIELDS = [
    { name: "employer", title: "Employer", placeholder: "Enter the name of employer", "type": "input" },
    { name: "designation", title: "Designation", placeholder: "Enter the designation", "type": "input" },
    { name: "start", title: "Start Date", placeholder: "Enter the start date", "type": "date" },
    { name: "end", title: "End Date", placeholder: "Enter the end date", "type": "date" },
    { name: "summary", title: "Summary", placeholder: "Summary", "type": "text" }
]


export const EmploymentHistory = (props: any) => <ArrayForm
    name="history"
    fields={EMPLOYMENT_FIELDS}
    initValues={{"history": props.history}}
    onPrevious={props.onPrevious}
    onAddMore={props.onAddMore}
/>