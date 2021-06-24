import React, { Component } from 'react'
import LinkHeader from '@/components/LinkHeader'
import MvItem from './MvItem'
import styles from './style.module.less'
import { getPersonalizedMv } from '../../../../api/personalized'
export class Mv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mvList: [],
        }
    }
    componentDidMount() {
        getPersonalizedMv().then((mvList) => {
            this.setState({
                mvList,
            })
        })
    }
    render() {
        const { mvList } = this.state
        return (
            mvList.length > 0 && (
                <div>
                    <LinkHeader title="推荐MV" route="/video/mv" />
                    <div className={styles.content}>
                        {mvList.map(
                            (
                                { id, name, playCount, picUrl, artistName },
                                index
                            ) => (
                                <MvItem
                                    key={index}
                                    id={id}
                                    name={name}
                                    playCount={playCount}
                                    picUrl={picUrl}
                                    artistName={artistName}
                                />
                            )
                        )}
                    </div>
                </div>
            )
        )
    }
}

export default Mv
