import { combineReducers } from 'redux';
import task from './task';

const myReducer = combineReducers({
    task, //task: tasks
});

export default myReducer;