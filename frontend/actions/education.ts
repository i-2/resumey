import { Action } from './type';

export function addMoreEducationDetail() : Action<any> {
  return {
      type: 'ADD_MORE_EDU_DETAIL',
      payload: null
  }
}

export function updateEducationDetails(values: any[]): Action<any> {
  return {
      type: 'UPDATE_EDU_DETAIL',
      payload: values
  }
} 