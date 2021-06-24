import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Listitem from './Listitem'
import Song from './Listitem/Song'
import styles from './style.module.less'

export class Playlists extends Component {
    static defaultProps = {
        playlist: [],
    }

    static propTypes = {
        playlist: PropTypes.array,
    }
    render() {
        let isLogin = false
        const { playlist } = this.props
        return (
            <div className={styles.wrapper}>
                {isLogin && <Song />}
                {playlist.map(
                    ({ name, id, playCount, picUrl, coverImgUrl }, index) => (
                        <Listitem
                            key={index}
                            id={id}
                            name={name}
                            playCount={playCount}
                            picUrl={picUrl || coverImgUrl}
                        />
                    )
                )}
            </div>
        )
    }
}

export default Playlists
