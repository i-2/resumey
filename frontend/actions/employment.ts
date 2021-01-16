import { Action } from './type';

export function addMoreDetail(): Action<any> {
    return {
        type: 'ADD_MORE_DETAIL',
        payload: null
    }
}