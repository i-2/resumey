import { Action } from './type';

export function addMoreEmpDetail(): Action<any> {
    return {
        type: 'ADD_MORE_DETAIL',
        payload: null
    }
}

export function updateEmpDetails(values: any[]): Action<any> {
    return {
        type: 'UPDATE_EMP_DETAIL',
        payload: values
    }
} 