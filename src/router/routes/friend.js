import { lazy } from 'react';

const routes = [
    {
        path: '/friend',
        exact: true,
        meta: {
            title: '朋友',
        },
        component: lazy(() => import('@/pages/Friend')),
    },
]

export default routes