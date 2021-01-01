import { Action } from '../actions';

const initalState = {
    windowCount: 0,
}

export function wizard(state = initalState, action: Action<any>) {
    switch (action.type) {
        case 'UPDATE_WIZARD':
            return { ...state, windowCount: action.payload.count }
        default:
            return state
    }
}