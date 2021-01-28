import { Action } from '../actions';

const initalState = {
    hasPublished: false,
    urlLink: null
}

export function publish(state: any = initalState , action: Action<any>) {
    switch (action.type) {
        case 'PUBLISH':
            return {hasPublished: true, urlLink: action.payload.url}
        default:
            return state
    }
}