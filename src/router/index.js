import { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                {props.children}
            </Switch>
        </BrowserRouter>
    )
}

function renderRoutes(routes) {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                routes ? (
                    <Switch>
                        {
                            routes.map((route, i) => {
                                if (route.redirect) {
                                    return (
                                        <Redirect to={route.redirect} component={route.component} key={route.path || i}/>
                                    )
                                } else {
                                    return (
                                        <Route
                                            key={route.path || i}
                                            path={route.path}
                                            exact={route.exact}
                                            strict={route.strict}
                                            render={props => (<route.component {...props} routes={route.routes} />)
                                            }
                                        />
                                    )
                                }
                            })
                        }
                    </Switch>
                ) : null
            }
        </Suspense>
    )
}

export {
    Router,
    renderRoutes
}