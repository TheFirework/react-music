import React, { Component } from 'react'
import LinkHeader from '@/components/LinkHeader'
import PaygiftItem from '@/components/PaygiftItem'
import styles from './style.module.less'
export class Paygift extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <LinkHeader title="付费精品" />
                <div className={styles.wrapper}>
                    {data.map(
                        ({
                            id,
                            name,
                            rcmdText,
                            picUrl,
                            lastProgramName,
                            originalPrice,
                        }) => (
                            <PaygiftItem
                                key={id}
                                name={name}
                                rcmdText={rcmdText}
                                picUrl={picUrl}
                                lastProgramName={lastProgramName}
                                originalPrice={originalPrice}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Paygift
