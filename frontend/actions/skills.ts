import { Action } from './type';

export function addMoreSkillDetail(): Action<any>{
    return {
        type: 'ADD_MORE_SKILL',
        payload: null
    }
}

export function updateSkillDetails(values: any[]) : Action<any> {
    return {
        type: 'UPDATE_SKILLS',
        payload: values
    }
}