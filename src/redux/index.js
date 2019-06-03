import React, { Component } from 'react';
import { createStore } from 'redux'
import myReducer from './reducers/indexReducers'
import { Provider } from 'react-redux'
import TastList from './component/Tasklist';
const store = createStore(myReducer);

class index extends Component {
    componentWillMount() {
        if (localStorage && localStorage.getItem('task')) {
            console.log(localStorage.getItem('task'));
            var tasks_parse = JSON.parse(localStorage.getItem('task'));
            console.log(tasks_parse);
        } else {
            console.log('Không có dữ liệu');
        }
    }
    render() {
        return (
            <Provider store={store}>
                <TastList />
            </Provider>
        );
    }
}
export default index;