import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './style.module.less'

export class DjradioItem extends Component {
    static defaultPropTypes = {
        fee: false,
    }
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        picUrl: PropTypes.string,
        rcmdtext: PropTypes.string,
        className: PropTypes.string,
        fee: PropTypes.bool,
    }

    render() {
        const { name, picUrl, rcmdtext, className, fee } = this.props
        return (
            <div className={cn(styles.wrapper, className)}>
                <div className={styles.cover}>
                    <img src={picUrl} alt="picUrl" />
                    <div className={styles.name}>{name}</div>
                    {fee && <div className={styles.fee}>收费精品</div>}
                </div>
                <div className={styles.rcmdText}>{rcmdtext}</div>
            </div>
        )
    }
}

export default DjradioItem
