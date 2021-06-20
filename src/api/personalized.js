import request from '../http'

export const getBanner = async () => {
    const response = await request({
        url: '/banner',
        method: 'GET',
        params: {
            type: 0,
        }
    })

    return response.banners
}

export const getPersonalized = async (isLogin = false) => {
    let limit = isLogin ? 9 : 10
    const response = await request({
        url: '/personalized',
        method: 'GET',
        params: {
            limit: limit,
        }
    })

    return response.result
}

export const getPersonalizedNewSong = async () => {
    const response = await request({
        url: '/personalized/newsong',
        method: 'GET',
        params: {
            limit: 10,
        }
    })

    return response.result
}

export const getPersonalizedMv = async () => {
    const response = await request({
        url: '/personalized/mv',
        method: 'GET',
    })

    return response.result
}

export const getPersonalizedDj = async () => {
    const response = await request({
        url: '/personalized/djprogram',
        method: 'GET',
    })

    return response.result
}


