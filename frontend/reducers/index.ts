import { combineReducers } from "redux";
import { wizard } from './wizard';
import { personalDetail } from './personalDetail';
import { profSummary } from './profSummary';
import { employment } from './employment';
import { education } from './education';
import { skill } from './skills';
import { social } from './social';


export default combineReducers({ wizard, personalDetail, profSummary, employment, education, skill, social })
