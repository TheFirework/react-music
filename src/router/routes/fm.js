import { lazy } from 'react';

const routes = [
    {
        path: '/fm',
        exact: true,
        meta: {
            title: '私人FM',
        },
        component: lazy(() => import('@/pages/Fm')),
    },
]

export default routes