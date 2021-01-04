import { Action } from '../actions';

const initalState = {
    summary: "test",
}

export function profSummary(state: any = initalState, action: Action<any>) {
    switch (action.type) {
        case 'UPDATE_PROF_SUMMARY':
            return action.payload
        default:
            return state
    }
}