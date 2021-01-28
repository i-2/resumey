import { Action } from '../actions';

const initalState = [
    {
        "employer": "",
        "designation": "",
        "start": new Date(),
        "end": new Date(),
        "summary": ""
    }]

export function employment(state: any = [], action: Action<any>) {
    switch (action.type) {
        case 'ADD_MORE_DETAIL':
            return [...state, ...initalState]
        case 'UPDATE_EMP_DETAIL':
            return [...action.payload]
        default:
            return state
    }
}