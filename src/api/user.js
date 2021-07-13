import request from '../http'

export const login = ({ phone, password }) => {
    return request({
        url: '/login/cellphone',
        method: 'GET',
        params: {
            phone,
            password,
        },
    })
}

export const logout = () => {
    return request({
        method: 'POST',
        url: '/logout',
    })
}
