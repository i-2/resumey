import { Action } from './type';

export function tryPublish() : Action<any>{
    return {
        type: 'TRY_PUBLISH',
        payload: null
    }
}

export function makePublish(urlLink: string) : Action<any> {
    return {
        type: 'PUBLISH',
        payload: {
            url: urlLink
        }
    }
}