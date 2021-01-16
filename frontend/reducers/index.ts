import { combineReducers } from "redux";
import { wizard } from './wizard';
import { personalDetail } from './personalDetail';
import { profSummary } from './profSummary';
import { employment } from './employment';

export default combineReducers({ wizard, personalDetail, profSummary, employment })
