import React from 'react';
import { ArrayForm } from './chakraForms/ArrayForm';
import * as Yup from 'yup';


const SKILL_FIELDS = [
    { name: "skillName", title: "Skill Name", placeholder: "Enter the name of skills", "type": "input", "validate": Yup.string().required() },
    { name: "skillRating", title: "Stars", placeholder: "", "type": "star", "validate": Yup.number().required() },
]


export const SkillDetails = (props: any) => <ArrayForm
    name="skills"
    fields={SKILL_FIELDS}
    initValues={{ "skills": props.skills }}
    onPrevious={props.onPrevious}
    onAddMore={props.onAddMore}
    onSubmit={props.onSave}
    onNext={props.onNext}
/>