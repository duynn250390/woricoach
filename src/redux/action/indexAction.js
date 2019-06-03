import * as typeAction from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: typeAction.LIST_ALL,
    }
}
export const addTask = (task) => {
    return {
        type: typeAction.ADD_TASK,
        task: task
    }
}