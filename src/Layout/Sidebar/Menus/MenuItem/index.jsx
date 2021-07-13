import React, { Component } from 'react'
import SvgIcon from '@/components/SvgIcon'
import styles from './style.module.less'

import cn from 'classnames'

export class MenuItem extends Component {
    render() {
        const { label, icon, path, isActive, onClick } = this.props

        return (
            <div className={styles.itemWrap}>
                <div
                    className={
                        isActive
                            ? cn(styles.menuItem, styles.active)
                            : styles.menuItem
                    }
                    onClick={() => onClick(path)}>
                    <SvgIcon icon={icon} className={styles.icon} />
                    <span className={styles.label}>{label}</span>
                </div>
            </div>
        )
    }
}

export default MenuItem
