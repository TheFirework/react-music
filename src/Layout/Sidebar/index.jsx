import React, { Component } from 'react'
import User from './User'
import PlayList from './PlayList'
import Menus from './Menus'
import styles from './style.module.less'
export class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                // {
                //     title: '我的音乐',
                //     menu: [
                //         {
                //             icon: 'music_cloud_disk',
                //             label: '我的音乐云盘',
                //             isActive: true,
                //             path: '',
                //         },
                //         {
                //             icon: 'radio_station',
                //             label: '我的电台',
                //             isActive: false,
                //             path: '',
                //         },
                //         {
                //             icon: 'collection',
                //             label: '我的收藏',
                //             isActive: false,
                //             path: '',
                //         },
                //     ],
                // },
            ],
        }
    }

    render() {
        return (
            <div className={styles.sidebar}>
                <User />
                <div className={styles.content}>
                    <Menus />
                    <PlayList title="创建的歌单" />
                    <PlayList title="收藏的歌单" showAddIcon={false} />
                </div>
            </div>
        )
    }
}

export default Sidebar
