import { Action } from '../actions';

const initalState = {
    linkedin: "",
    twitter: "",
    github: ""
}

export function social(state: any = initalState , action: Action<any>) {
    switch (action.type) {
        case 'UPDATE_LINKS':
            return {...state, ...action.payload}
        default:
            return state
    }
}