
import { Action } from './type';

export function updateWizard(count: number): Action<any> {
    return {
        type: 'UPDATE_WIZARD',
        payload: {
            count
        }
    }
}