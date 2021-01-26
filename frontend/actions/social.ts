import { Action } from './type';


export function updateLinks(links: any) : Action<any> {
    return {
        type: 'UPDATE_LINKS',
        payload: links
    }
}