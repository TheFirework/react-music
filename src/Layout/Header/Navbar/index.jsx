import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './style.module.less'
import cn from 'classnames'
import ROUTES from '../../../router'

const NAVBAR = {
    [ROUTES.DISCOVERY]: [
        {
            label: '个性推荐',
            path: ROUTES.RECOMMEND,
        },
        {
            label: '歌单',
            path: ROUTES.PLAYLIST,
        },
        {
            label: '主播电台',
            path: ROUTES.DJRADIO,
        },
        {
            label: '排行榜',
            path: ROUTES.TOP_LIST,
        },
        {
            label: '歌手',
            path: ROUTES.SINGER,
        },
        {
            label: '最新音乐',
            path: ROUTES.LATEST_MUSIC,
        },
    ],
    [ROUTES.VIDEO]: [
        {
            label: '视频',
            path: ROUTES.RECOMMEND,
        },
        {
            label: 'MV',
            path: ROUTES.PLAYLIST,
        },
    ],
}

let list = []
class Navbar extends Component {
    createNavbarList = () => {
        const { pathname } = this.props.location
        const matchPathPrefix = Object.keys(NAVBAR).find((key) =>
            pathname.startsWith(key)
        )
        if (!matchPathPrefix) {
            return []
        }
        return NAVBAR[matchPathPrefix]
    }

    getRouteActive = (pathname, path, index) => {
        const hasMatchRoute = list.find(({ path }) => path === pathname)
        return hasMatchRoute ? path === pathname : index === 0
    }

    handleItemClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        list = this.createNavbarList()
        if (!list.length) {
            return <div className={styles.navbar}></div>
        }
        const { pathname } = this.props.location
        return (
            <div className={styles.navbar}>
                {list.map(({ path, label }, index) => {
                    const isActive = this.getRouteActive(pathname, path, index)
                    return (
                        <div
                            className={cn(
                                styles.navbarMenuItem,
                                isActive ? styles.active : ''
                            )}
                            onClick={() => this.handleItemClick(path)}
                            key={index}>
                            {label}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(Navbar)
