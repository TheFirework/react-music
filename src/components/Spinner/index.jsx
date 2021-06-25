import React, { Component } from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import styles from './style.module.less'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#414040' }} spin />
)

export class Spinner extends Component {
    static defaultProps = {
        spinning: false,
        tip: '加载中...',
    }
    static propTypes = {
        spinning: PropTypes.bool,
        tip: PropTypes.string,
    }
    render() {
        const { spinning, tip } = this.props
        return (
            <div className={styles.spinner}>
                <Spin spinning={spinning} indicator={antIcon} />
                {tip && <span className={styles.spinnerText}>{tip}</span>}
            </div>
        )
    }
}

export default Spinner
