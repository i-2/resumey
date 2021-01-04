import { Action } from './type';

export function updateProfSummary(value: any): Action<any> {
    return {
        type: 'UPDATE_PROF_SUMMARY',
        payload: value
    }
}