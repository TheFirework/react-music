import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import styles from './style.module.less'
import ROUTES from '../../../router'

const MENU = [
    {
        icon: 'find_music',
        label: '发现音乐',
        path: ROUTES.DISCOVERY,
    },
    {
        icon: 'fm',
        label: '私人FM',
        path: ROUTES.FM,
    },
    {
        icon: 'video',
        label: '视频',
        path: ROUTES.VIDEO,
    },
    {
        icon: 'friend',
        label: '朋友',
        path: ROUTES.FRIEND,
    },
]

export class Menus extends Component {
    handleClick = (path) => {
        this.props.history.push(path)
    }

    getRouteActive = (path) => {
        const { pathname } = this.props.location
        return (
            pathname.startsWith(path) ||
            (pathname === ROUTES.ROOT && path === ROUTES.DISCOVERY)
        )
    }

    render() {
        const { title } = this.props
        return (
            <div className={styles.menu}>
                {title && <div className={styles.title}>{title}</div>}
                {MENU.map(({ label, icon, path }) => {
                    return (
                        <MenuItem
                            label={label}
                            icon={icon}
                            path={path}
                            key={path}
                            isActive={this.getRouteActive(path)}
                            onClick={() => this.handleClick(path)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default withRouter(Menus)
