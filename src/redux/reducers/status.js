import * as typeAction from './../constants/ActionTypes';

var initialState =  false;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.TONGEL_STATUS:
            state = !state;
            return state;
            
    }
    console.log(state);
}
export default myReducer;