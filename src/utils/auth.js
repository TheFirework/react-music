import localStorage from './localStorage'
const TokenKey = 'Authorization'
const UserKey = 'User'

const getToken = () => {
    return localStorage.getItem(TokenKey)
}

const setToken = (token) => {
    localStorage.setItem(TokenKey, token)
}

const removeToken = () => {
    localStorage.removeItem(TokenKey)
}

const checkToken = () => {
    if (localStorage.getItem(TokenKey)) {
        return true
    } else {
        return false
    }
}

const getUser = () => {
    return localStorage.getItem(UserKey)
}

const setUSer = (user) => {
    localStorage.setItem(UserKey, user)
}

const removeUser = () => {
    localStorage.removeItem(UserKey)
}

const Auth = {
    getToken,
    setToken,
    removeToken,
    checkToken,
    getUser,
    setUSer,
    removeUser,
}

export default Auth
