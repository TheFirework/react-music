import React, { Component } from 'react'
import LinkHeader from '@/components/LinkHeader'
import Playlists from '../../../../components/Playlists'
import { getPersonalized } from '../../../../api/personalized'
export class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: [],
        }
    }
    componentDidMount() {
        getPersonalized().then((playlist) => {
            this.setState({
                playlist,
            })
        })
    }
    render() {
        const { playlist } = this.state
        return (
            playlist.length > 0 && (
                <div>
                    <LinkHeader title="推荐歌单" route="/discover/playlist" />
                    <Playlists playlist={playlist} />
                </div>
            )
        )
    }
}

export default Playlist
