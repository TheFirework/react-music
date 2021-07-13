import React, { Component } from 'react'
import styles from './style.module.less'
import ListItem from './ListItem'
export class OfficialList extends Component {
    render() {
        const { list } = this.props
        return (
            <div className={styles.wrapper}>
                {list.map(
                    ({ coverImgUrl, updateTime, name, id, tracks }, index) => {
                        return (
                            <ListItem
                                key={index}
                                coverImgUrl={coverImgUrl}
                                updateTime={updateTime}
                                name={name}
                                id={id}
                                tracks={tracks}
                            />
                        )
                    }
                )}
            </div>
        )
    }
}

export default OfficialList
