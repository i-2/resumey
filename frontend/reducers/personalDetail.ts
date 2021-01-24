import { Action } from '../actions';

const initalState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    pinCode: ""
}

export function personalDetail(state: any = initalState, action: Action<any>) {
    switch (action.type) {
        case 'UPDATE_PERSONAL_DETAIL':
            return action.payload
        default:
            return state
    }
}