import request from '../http'
import { SONG_TYPE } from '@/typs/song'
export const getSongDetail = async (ids) => {
    const response = await request({
        url: '/song/detail',
        method: 'GET',
        params: {
            ids,
        },
    })
    return response.banners
}

export const getTopSong = async (type = SONG_TYPE.All) => {
    const response = await request({
        url: '/top/song',
        method: 'GET',
        params: {
            type,
        },
    })
    return response.data
}

export const getTopAlbum = async ({ limit, offset, area, type }) => {
    const response = await request({
        url: '/top/album',
        method: 'GET',
        params: {
            offset,
            limit,
            area,
            type,
        },
    })
    return [response.weekData, response.monthData]
}
