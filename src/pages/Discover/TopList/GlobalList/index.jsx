import React, { Component } from 'react'
import styles from './style.module.less'
import TopItem from './TopItem'
export class GlobalList extends Component {
    render() {
        const { list } = this.props
        return (
            <div className={styles.wrapper}>
                {list.map(({ coverImgUrl, name, id, playCount }, index) => (
                    <TopItem
                        key={index}
                        coverImgUrl={coverImgUrl}
                        name={name}
                        id={id}
                        playCount={playCount}
                    />
                ))}
            </div>
        )
    }
}

export default GlobalList
