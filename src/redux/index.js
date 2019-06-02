import React, { Component } from 'react';
import { createStore } from 'redux'
import {status,sort} from './action/index'

import myReducer from './reducers/index';

const store = createStore(myReducer);

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
            </div>
        );
    }
}

export default index;