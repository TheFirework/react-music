import React, { Component } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import PropTypes from 'prop-types'
import styles from './style.module.less'
import cn from 'classnames'

const DEFAULT_CAT = '全部'

export class Category extends Component {
    static defaultProps = {
        hotCategoty: [],
        categories: {},
        sub: [],
        currentCat: '全部',
        onSelectCategory: () => {},
    }
    static propTypes = {
        hotCategoty: PropTypes.array,
        categories: PropTypes.object,
        sub: PropTypes.array,
        currentCat: PropTypes.string,
        onSelectCategory: PropTypes.func,
    }
    handleClickCategory = (name) => {
        this.props.setCurrentCatgory(name)
        this.props.onSelectCategory(name)
    }
    render() {
        const { currentCat, hotCategoty, categories, sub } = this.props
        const renderCategory = () => (
            <div className={styles.popover}>
                <div className={styles.allCategory}>
                    <span
                        className={
                            currentCat === DEFAULT_CAT ? styles.active : ''
                        }
                        onClick={() => this.handleClickCategory(DEFAULT_CAT)}>
                        全部歌单
                    </span>
                </div>
                <div className={styles.content}>
                    {Object.entries(categories || {}).map(([key, value]) => {
                        const subItem = sub.filter(
                            ({ category }) => category === Number(key)
                        )
                        return (
                            <div key={key} className={styles.sub}>
                                <div className={styles.categoryName}>
                                    {value}
                                </div>
                                <div className={styles.content}>
                                    {subItem.map(({ name, hot }) => (
                                        <div
                                            key={name}
                                            className={styles.namebox}>
                                            <span
                                                className={cn(
                                                    styles.name,
                                                    currentCat === name &&
                                                        styles.active
                                                )}
                                                onClick={() =>
                                                    this.handleClickCategory(
                                                        name
                                                    )
                                                }>
                                                {name}
                                                {hot && (
                                                    <span
                                                        className={
                                                            styles.isHot
                                                        }>
                                                        HOT
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
        return (
            <div className={styles.wrapper}>
                <div className={styles.category}>
                    <Popover
                        content={renderCategory()}
                        trigger="click"
                        placement="bottomRight">
                        <div className={styles.categoryBtn}>
                            {currentCat === DEFAULT_CAT
                                ? '全部歌单'
                                : currentCat}
                            <RightOutlined />
                        </div>
                    </Popover>
                </div>
                <div className={styles.hotCategoty}>
                    {hotCategoty.map(({ name }, index) => (
                        <div
                            key={index}
                            className={cn(
                                styles.name,
                                currentCat === name && styles.active
                            )}
                            onClick={() => this.handleClickCategory(name)}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Category
