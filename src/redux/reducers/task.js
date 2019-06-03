import * as typeAction from './../constants/ActionTypes';


var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var radomID = () => {
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
}
// var data = [
//     {
//         id: radomID(),
//         name: 'Học ReactJS',
//         price: 1000000,
//         status: true
//     },
//     {
//         id: radomID(),
//         name: 'Học AngularJS',
//         price: 1200000,
//         status: true
//     },
//     {
//         id: radomID(),
//         name: 'Học Laravel',
//         price: 1200000,
//         status: true
//     },
//     {
//         id: radomID(),
//         name: 'Học ASP.NET',
//         price: 1200000,
//         status: true
//     },
//     {
//         id: radomID(),
//         name: 'Học HTML/CSS',
//         price: 1200000,
//         status: true
//     }
// ];
// localStorage.setItem('task', JSON.stringify(data));

var dataLocal = JSON.parse(localStorage.getItem('task'));

var initialState = dataLocal ? dataLocal : [];


var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.LIST_ALL:
            return state;
        case typeAction.ADD_TASK:
            // var newTask = {
            //     id: radomID(),
            //     name: action.task.name,
            //     price: action.task, price,
            //     status: action.task.status === 'true' ? true : false
            // }
            // state.push(newTask);
            // localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default myReducer;