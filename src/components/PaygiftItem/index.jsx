import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.less'

export class PaygiftItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        rcmdText: PropTypes.string,
        picUrl: PropTypes.string,
        lastProgramName: PropTypes.string,
        originalPrice: PropTypes.number,
    }

    render() {
        const { id, name, rcmdText, picUrl, lastProgramName, originalPrice } =
            this.props
        return (
            <div className={styles.wrapper}>
                <div className={styles.cover}>
                    <img src={picUrl} alt="picUrl" />
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.rcmdText}>{rcmdText}</div>
                    <div className={styles.lastProgramName}>
                        {lastProgramName}
                    </div>
                    <div className={styles.originalPrice}>
                        ¥{originalPrice / 100}
                    </div>
                </div>
            </div>
        )
    }
}

export default PaygiftItem
