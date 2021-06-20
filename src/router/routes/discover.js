import { lazy } from 'react';


const routes = [
    {
        path: '/discover/recommend',
        exact: true,
        meta: {
            title: '个性推荐',
        },
        component: lazy(() => import('@/pages/Discover/Recommend')),
    },
    {
        path: '/discover/playlist',
        exact: true,
        meta: {
            title: '歌单',
        },
        component: lazy(() => import('@/pages/Discover/PlayList')),
    },
    {
        path: '/discover/singer',
        exact: true,
        meta: {
            title: '歌手',
        },
        component: lazy(() => import('@/pages/Discover/Singer')),
    },
    {
        path: '/discover/djradio',
        exact: true,
        meta: {
            title: '主播电台',
        },
        component: lazy(() => import('@/pages/Discover/Djradio')),
    },
    {
        path: '/discover/toplist',
        exact: true,
        meta: {
            title: '排行榜',
        },
        component: lazy(() => import('@/pages/Discover/TopList')),
    },
    {
        path: '/discover/latest',
        exact: true,
        meta: {
            title: '最新音乐',
        },
        component: lazy(() => import('@/pages/Discover/LatestMusic')),
    }
]

export default routes