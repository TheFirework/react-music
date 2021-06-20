import { lazy } from 'react';

const routes = [
    {
        path: '/video',
        exact: true,
        meta: {
            title: '视频',
        },
        component: lazy(() => import('@/pages/Video')),
    },
]

export default routes