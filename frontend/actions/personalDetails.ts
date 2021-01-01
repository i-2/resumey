import { Action } from './type';

export function updatePersonalDetail(name: string, value: string): Action<any> {
    return {
        type: 'UPDATE_PERSONAL_DETAIL',
        payload: {
            name,
            value
        }
    }
}