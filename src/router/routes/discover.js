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
    }
]

export default routes