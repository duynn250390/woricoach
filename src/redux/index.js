import React, { Component } from 'react';
import { createStore } from 'redux'
import {status,sort} from './action/index'

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}
var myReducer = (state = initialState, action) => {
    if (action.type === 'TONGEL_STATUS') {
        state.status = !state.status;
        return state;
    }
    if(action.type === 'SORT'){
        var {by,value} = action.sort;
        var {status} = state;
        return{
            status: status,
            sort:{
                by: by,
                value: value
            }
        }
    }
    return state;
}
const store = createStore(myReducer);
// Thay doi status
var StatusAction =  {
    type: 'TONGEL_STATUS'
}
console.log('Mặc định: ', store.getState());

store.dispatch(status());

console.log('TONGEL STATUS: ', store.getState());

store.dispatch(sort({
    by: 'Hello',
    value: '-1'
}));
console.log('SORT : ', store.getState());
class index extends Component {
    render() {
        return (
            <div>
                <h3>Hello</h3>
            </div>
        );
    }
}

export default index;