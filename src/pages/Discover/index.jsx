import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ROUTES from '../../router'
import styles from './style.module.less'

const Recommend = lazy(() => import('./Recommend'))
const PlayList = lazy(() => import('./PlayList'))
const Djradio = lazy(() => import('./Djradio'))
const Singer = lazy(() => import('./Singer'))
const LatestMusic = lazy(() => import('./LatestMusic'))
const TopList = lazy(() => import('./TopList'))

export class index extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Suspense fallback={null}>
                    <Switch>
                        <Route
                            exact
                            path={ROUTES.RECOMMEND}
                            component={Recommend}
                        />
                        <Route
                            exact
                            path={ROUTES.PLAYLIST}
                            component={PlayList}
                        />
                        <Route
                            exact
                            path={ROUTES.DJRADIO}
                            component={Djradio}
                        />
                        <Route
                            exact
                            path={ROUTES.TOP_LIST}
                            component={TopList}
                        />
                        <Route exact path={ROUTES.SINGER} component={Singer} />
                        <Route
                            exact
                            path={ROUTES.LATEST_MUSIC}
                            component={LatestMusic}
                        />

                        {/* / 默认匹配 Recommend */}
                        <Route
                            exact
                            path={ROUTES.DISCOVERY}
                            component={Recommend}
                        />
                        <Redirect
                            from={`${ROUTES.DISCOVERY}/*`}
                            to={ROUTES.RECOMMEND}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default index
