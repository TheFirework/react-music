import React, { Component, Suspense, lazy } from 'react'
import Layout from '@/Layout'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ROUTES from './router'

const Discovery = lazy(() => import('./pages/Discover'))
const Video = lazy(() => import('./pages/Video'))
const Fm = lazy(() => import('./pages/Fm'))
const Friend = lazy(() => import('./pages/Friend'))

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route
                                path={ROUTES.DISCOVERY}
                                component={Discovery}
                            />
                            <Route path={ROUTES.FM} component={Fm} />
                            <Route path={ROUTES.VIDEO} component={Video} />
                            <Route path={ROUTES.FRIEND} component={Friend} />

                            <Redirect
                                from={ROUTES.ROOT}
                                to={ROUTES.DEFAULT_ROUTE}
                            />
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App
