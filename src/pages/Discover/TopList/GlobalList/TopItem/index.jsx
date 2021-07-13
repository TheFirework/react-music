import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.less'
import PlayIcon from '../../../../../components/PlayIcon'
import PlayCount from '../../../../../components/PlayCount'

export class TopItem extends Component {
    static propTypes = {
        coverImgUrl: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.number,
        playCount: PropTypes.number,
    }

    render() {
        const { name, coverImgUrl, playCount } = this.props
        return (
            <div className={styles.wrapper}>
                <div className={styles.cover}>
                    <img src={coverImgUrl} alt="coverImgUrl" />
                    <PlayCount
                        playCount={playCount}
                        className={styles.playCount}
                    />
                    <div className={styles.icon}>
                        <PlayIcon className={styles.playicon} />
                    </div>
                </div>
                <div className={styles.name}>{name}</div>
            </div>
        )
    }
}

export default TopItem
