import * as ActionType from './action-type'

let defaultState = {
    // 是否显示搜索抽屉
    showDrawer:false,
}


export const app = (state = defaultState, action) => {
    console.log(action);
    switch(action.type){
        case ActionType.SHOW_SEARCH_DRAWER:
            return {...state,...action.data}
        default:
            return state
    }
}