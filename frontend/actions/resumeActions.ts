
import { Action } from './type';

export function submitPersonalDetails(): Action<any> {
    return {
        type: 'SUBMIT_DETAILS',
        payload: {}
    }
}