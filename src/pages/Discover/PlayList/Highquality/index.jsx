import React, { Component } from 'react'
import styles from './style.module.less'
export class Highquality extends Component {
    render() {
        const { data } = this.props
        return (
            data && (
                <div className={styles.wrapper}>
                    {data?.coverImgUrl && (
                        <img
                            className={styles.bg}
                            src={data.coverImgUrl}
                            alt="bg"
                        />
                    )}
                    <div className={styles.content}>
                        <div className={styles.cover}>
                            {data?.coverImgUrl && (
                                <img src={data.coverImgUrl} alt="cover" />
                            )}
                        </div>
                        <div className={styles.info}>
                            <div className={styles.tag}>精品歌单</div>
                            <div className={styles.name}>{data?.name}</div>
                            <div className={styles.copywriter}>
                                {data?.copywriter}
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default Highquality
