import * as ActionType from './action-type'

export const showSearchDrawer = (data) => ({
    type: ActionType.SHOW_SEARCH_DRAWER,
    data,
})

export const login = (data) => ({
    type: ActionType.LOGIN,
    data,
})
