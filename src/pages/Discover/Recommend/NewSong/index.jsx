import React, { Component } from 'react'
import LinkHeader from '@/components/LinkHeader'
import styles from './style.module.less'
import Song from './Song'
import { getPersonalizedNewSong } from '../../../../api/personalized'
export class NewSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musicList: [],
        }
    }
    componentDidMount() {
        getPersonalizedNewSong().then((musicList) => {
            this.setState({
                musicList,
            })
        })
    }
    render() {
        const { musicList } = this.state
        return (
            musicList.length > 0 && (
                <div>
                    <LinkHeader title="最新音乐" route="/discover/latest" />
                    <div className={styles.content}>
                        <div className={styles.list}>
                            {musicList
                                .slice(0, 5)
                                .map(
                                    (
                                        { id, name, picUrl, song, ...others },
                                        index
                                    ) => (
                                        <Song
                                            key={name}
                                            index={index}
                                            id={id}
                                            name={name}
                                            picUrl={picUrl}
                                            song={song}
                                            {...others}
                                        />
                                    )
                                )}
                        </div>
                        <div className={styles.list}>
                            {musicList.length > 4 &&
                                musicList
                                    .slice(5, 10)
                                    .map(
                                        (
                                            {
                                                id,
                                                name,
                                                picUrl,
                                                song,
                                                ...others
                                            },
                                            index
                                        ) => (
                                            <Song
                                                key={name}
                                                index={index + 5}
                                                id={id}
                                                name={name}
                                                picUrl={picUrl}
                                                song={song}
                                                {...others}
                                            />
                                        )
                                    )}
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default NewSong
