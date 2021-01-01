import { Action } from '../actions';

const initalState = {
    firstName: "",
    lastName: "",

}

export function personalDetail(state = initalState, action: Action<any>) {
    switch (action.type) {
        default:
            return state
    }
}