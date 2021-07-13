import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.less'
import PlayIcon from '../../../../../components/PlayIcon'

export class ListItem extends Component {
    static propTypes = {
        coverImgUrl: PropTypes.string,
        updateTime: PropTypes.number,
        name: PropTypes.string,
        id: PropTypes.number,
        tracks: PropTypes.array,
    }

    render() {
        const { coverImgUrl, tracks } = this.props
        return (
            <div className={styles.wrapper}>
                <div className={styles.cover}>
                    {coverImgUrl && <img src={coverImgUrl} alt="coverImgUrl" />}
                    <div className={styles.icon}>
                        <PlayIcon className={styles.playicon} />
                    </div>
                </div>
                <div className={styles.list}>
                    {tracks &&
                        tracks.map(({ first, second }, index) => (
                            <div className={styles.listitem} key={index}>
                                <div className={styles.index}>{index + 1}</div>
                                <div className={styles.first}>{first}</div>
                                <div className={styles.second}>{second}</div>
                            </div>
                        ))}
                    <div className={styles.more}>{'查看全部 >'}</div>
                </div>
            </div>
        )
    }
}

export default ListItem
