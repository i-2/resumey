import { combineReducers } from "redux";
import { wizard } from './wizard';
import { personalDetail } from './personalDetail';

export default combineReducers({ wizard, personalDetail })
