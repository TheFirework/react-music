import request from '../http'

export const getPlaylist = async ({ limit, cat, offset, order }) => {
    const response = await request({
        url: '/top/playlist',
        method: 'GET',
        params: {
            limit,
            offset,
            cat,
            order,
        },
    })
    return response
}

export const getPlaylistHotCategory = async () => {
    const response = await request({
        url: '/playlist/hot',
        method: 'GET',
    })
    return response.tags
}

export const getPlaylistCategory = async () => {
    const response = await request({
        url: '/playlist/catlist',
        method: 'GET',
    })
    return response
}

export const getHighqualitySongList = async (cat) => {
    const response = await request({
        url: '/top/playlist/highquality',
        method: 'GET',
        params: {
            limit: 1,
            cat,
        },
    })
    return response
}

export const getPlaylistDetail = async ({ id }) => {
    const response = await request({
        url: '/playlist/detail',
        method: 'GET',
        params: {
            id,
        },
    })
    return response
}
