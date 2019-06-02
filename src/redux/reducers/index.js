import * as typeAction from './../constants/ActionTypes';

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.TONGEL_STATUS:
            state.status = !state.status;
            return state;
        case typeAction.SORT:
            var { by, value } = action.sort;
            var { status } = state;
            return {
                status: status,
                sort: {
                    by: by,
                    value: value
                }
            }
        default:
                return state;
    }
    // if (action.type === typeAction.TONGEL_STATUS) {
    //     state.status = !state.status;
    //     return state;
    // }
    // if (action.type === typeAction.SORT) {
    //     var { by, value } = action.sort;
    //     var { status } = state;
    //     return {
    //         status: status,
    //         sort: {
    //             by: by,
    //             value: value
    //         }
    //     }
    // }
    // return state;
}
export default myReducer;