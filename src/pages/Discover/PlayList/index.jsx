import React, { Component } from 'react'
import Highquality from './Highquality'
import Category from './Category'
import Playlists from '@/components/Playlists'
import Pagination from '@/components/Pagination'
import styles from './style.module.less'
import {
    getHighqualitySongList,
    getPlaylistHotCategory,
    getPlaylistCategory,
    getPlaylist,
} from '@/api/playlist'
export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highquality: null,
            hotCategoty: [],
            categories: {},
            sub: [],
            currentCat: '全部',
            playlists: [],
            pagination: {
                page: 1,
                pageSize: 100,
                total: 0,
            },
        }
    }
    componentDidMount() {
        getHighqualitySongList().then((response) => {
            this.setState({
                highquality: response.playlists[0],
            })
        })
        getPlaylistHotCategory().then((hotCategoty) => {
            this.setState({
                hotCategoty,
            })
        })
        getPlaylistCategory().then(({ categories, sub }) => {
            this.setState({
                categories,
                sub,
            })
        })
        const { currentCat, pagination } = this.state
        getPlaylist({ cat: currentCat, limit: pagination.pageSize }).then(
            ({ playlists, total }) => {
                this.setState({
                    playlists,
                    pagination: {
                        ...pagination,
                        total,
                    },
                })
            }
        )
    }
    handleSetCurrentCatgory = (currentCat) => {
        this.setState({
            currentCat,
        })
    }
    handleSelectCategory = (cat) => {
        this.setState({
            currentCat: cat,
        })
        const pagination = this.state
        getPlaylist({ cat, offset: 0, limit: pagination.pageSize }).then(
            ({ playlists, total }) => {
                this.setState({
                    playlists,
                    pagination: {
                        ...pagination,
                        total,
                        page: 1,
                    },
                })
            }
        )
        getHighqualitySongList(cat).then((response) => {
            this.setState({
                highquality: response.playlists[0],
            })
        })
    }
    handlePageChange = (page) => {
        const { pagination, currentCat } = this.state
        const offset = (page - 1) * pagination.pageSize
        getPlaylist({
            cat: currentCat,
            offset,
            limit: pagination.pageSize,
        }).then(({ playlists, total }) => {
            this.setState({
                playlists,
                pagination: {
                    ...pagination,
                    total,
                    page,
                },
            })
        })
    }
    render() {
        const {
            highquality,
            hotCategoty,
            currentCat,
            categories,
            sub,
            playlists,
            pagination,
        } = this.state
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Highquality data={highquality} />
                    <Category
                        categories={categories}
                        sub={sub}
                        hotCategoty={hotCategoty}
                        currentCat={currentCat}
                        setCurrentCatgory={this.handleSetCurrentCatgory}
                        onSelectCategory={this.handleSelectCategory}
                    />
                    <Playlists playlist={playlists} />
                    <Pagination
                        current={pagination.page}
                        total={pagination.total}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}

export default index
