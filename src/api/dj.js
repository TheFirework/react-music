import request from '../http'

export const getDjBanner = async () => {
    const response = await request({
        url: '/dj/banner',
        method: 'GET',
    })
    return response.data
}

export const getDjCategory = async () => {
    const response = await request({
        url: '/dj/catelist',
        method: 'GET',
    })
    return response.categories
}

export const getPersonalizePecommendDj = async ({ limit = 5 }) => {
    const response = await request({
        url: '/dj/personalize/recommend',
        method: 'GET',
        params: {
            limit,
        },
    })
    return response.data
}
