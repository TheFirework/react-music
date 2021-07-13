import React, { Component } from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import styles from './style.module.less'
import PropTypes from 'prop-types'
import cn from 'classnames'
export class PlayIcon extends Component {
    static propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className } = this.props
        return (
            <div className={cn(styles.wrapper, className)}>
                <CaretRightOutlined />
            </div>
        )
    }
}

export default PlayIcon
