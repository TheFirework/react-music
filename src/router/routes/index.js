import { lazy } from 'react';
import discover from './discover'
import fm from './fm'
import video from './video'
import friend from './friend'

import Recommend from '../../pages/Discover/Recommend'

 const routes = [
     ...discover,
    ...fm,
    ...video,
    ...friend,
     {
         path: '/',
         exact: true,
         strict: true,
         meta: {
             title: '首页',
         },
         redirect: '/discover/recommend',
         component: Recommend,
     },
    {
        path: '',
        meta: {
            title: '404',
        },
        exact: false,
        component: lazy(() => import('@/pages/Error/Page404')),
    }
]

export default routes