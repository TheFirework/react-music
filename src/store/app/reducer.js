import * as ActionType from './action-type'
import Auth from '../../utils/auth'

const user = Auth.getUser()
let defaultState = {
    // 是否显示搜索抽屉
    showDrawer: false,
    isLogged: !!user?.userId,
    user: user,
}

export const app = (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.SHOW_SEARCH_DRAWER:
            return { ...state, ...action.data }
        case ActionType.LOGIN:
            Auth.setUSer(action.data)
            return { ...state, ...action.data, isLogged: true }
        default:
            return state
    }
}
