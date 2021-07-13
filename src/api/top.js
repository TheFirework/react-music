import request from '../http'

export const getTopList = async () => {
    const response = await request({
        url: '/toplist/detail',
        method: 'GET',
    })
    const officials = ['飙升榜', '新歌榜', '原创榜', '热歌榜']
    const list = response.list.filter((e) => officials.includes(e.name))
    let ids = list.map((e) => e.id)
    let globalList = response.list.filter((e) => !ids.includes(e.id))
    let artistTop = response.artistToplist
    return {
        officialList: [
            ...list,
            {
                coverImgUrl: artistTop.coverUrl,
                updateTime: new Date().getTime(),
                name: artistTop.name,
                id: 0,
                tracks: artistTop.artists,
            },
        ], // 官方榜
        globalList, // 全球
    }
}
