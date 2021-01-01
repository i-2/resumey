
import { Action } from './type';

export function updateWizard(count: number): Action<any> {
    console.log("update count", count);
    return {
        type: 'UPDATE_WIZARD',
        payload: {
            count
        }
    }
}