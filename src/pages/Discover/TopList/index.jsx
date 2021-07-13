import React, { Component } from 'react'
import GlobalList from './GlobalList'
import OfficialList from './OfficialList'
import styles from './style.module.less'
import { getTopList } from '../../../api/top'
export class TopList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            officialList: [],
            globalList: [],
        }
    }
    componentDidMount() {
        getTopList().then(({ officialList, globalList }) => {
            this.setState({
                officialList,
                globalList,
            })
        })
    }
    render() {
        const { officialList, globalList } = this.state
        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>官方榜</div>
                {officialList && <OfficialList list={officialList} />}
                <div className={styles.title}>全球榜</div>
                {globalList && <GlobalList list={globalList} />}
            </div>
        )
    }
}

export default TopList
