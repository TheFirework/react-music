import request from '../http'

export const getSongDetail = async (ids) => {
    const response = await request({
        url: '/song/detail',
        method: 'GET',
        params: {
            ids
        }
    })

    return response.banners
}