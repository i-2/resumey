import { Action } from './type';

export function updatePersonalDetail(value: any): Action<any> {
    return {
        type: 'UPDATE_PERSONAL_DETAIL',
        payload: value
    }
}