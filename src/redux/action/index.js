import * as typeAction from './../constants/ActionTypes';

export const status = ()=>{
    return{
        type: typeAction.TONGEL_STATUS
    }
}
export const sort = (sort,thamso1,thamso2)=>{
    return{
        type: typeAction.SORT,
        sort // sort: sort
    }
}