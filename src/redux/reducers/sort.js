import * as typeAction from './../constants/ActionTypes';

var initialState = {
    by: 'name',
    value: 1
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.SORT:
            var { by, value } = action.sort;
            return {by,value}
    }
}
export default myReducer;