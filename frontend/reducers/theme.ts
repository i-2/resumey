import { Action } from '../actions';

const initalState = {
    theme: 'plain'
}

export function theme(state: any = initalState, action: Action<any>) {
    switch (action.type) {
        case 'UPDATE_THEME':
            return action.payload
        default:
            return state
    }
}