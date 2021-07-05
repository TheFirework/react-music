import request from '../http'
import { chunk } from '../utils/array'

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
    const categories = chunk(response.categories, 8)
    return categories
}

export const getPaygift = async () => {
    const response = await request({
        url: '/dj/paygift',
        method: 'GET',
        params: {
            limit: 4,
        },
    })
    return response?.data?.list
}

export const getPersonalizeRecommendDj = async () => {
    const response = await request({
        url: '/dj/personalize/recommend',
        method: 'GET',
        params: {
            limit: 6,
        },
    })
    return response.data
}

export const getDjRadioHotByCateId = async ({
    cateId,
    offset = 0,
    limit = 30,
}) => {
    const response = await request({
        url: '/dj/radio/hot',
        method: 'GET',
        params: {
            cateId,
            offset,
            limit,
        },
    })
    return response.djRadios
}
