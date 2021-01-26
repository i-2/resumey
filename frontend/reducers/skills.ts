import { Action } from '../actions';

const initalState = [{
    skillName: "",
    skillRating: ""
}]

export function skill(state: any = [] , action: Action<any>) {
    switch (action.type) {
        case 'ADD_MORE_SKILL':
            return [...state, ...initalState]
        case 'UPDATE_SKILLS':
            return [...action.payload]
        default:
            return state
    }
}