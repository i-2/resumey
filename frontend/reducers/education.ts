import { Action } from '../actions';

const initalState = [{
    school: "",
    degree: "",
    start: new Date(),
    end: new Date(),
    city: "",
    description: "",
    country: ""
}]

export function education(state: any = [] , action: Action<any>) {
    switch (action.type) {
        case 'ADD_MORE_EDU_DETAIL':
            return [...state, ...initalState]
        case 'UPDATE_EDU_DETAIL':
            return [...action.payload]
        default:
            return state
    }
}