import request from '../http'

export const getDjBanner = async () => {
    const response = await request({
        url: '/toplist/detail',
        method: 'GET',
    })
    return {
        artistToplist: response.artistToplist,
        rewardToplist: response.rewardToplist,
    }
}
