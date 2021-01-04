import { combineReducers } from "redux";
import { wizard } from './wizard';
import { personalDetail } from './personalDetail';
import { profSummary } from './profSummary';

export default combineReducers({ wizard, personalDetail, profSummary })
