import React, { Component } from 'react'
import LinkHeader from '@/components/LinkHeader'
import DjradioItem from '@/components/DjradioItem'
import { RADIO_FEE_TYPE } from '@/types/dj'
import cn from 'classnames'
import styles from './style.module.less'

export class RadioHot extends Component {
    render() {
        const { data, title, route } = this.props
        return (
            <div>
                <LinkHeader title={title} route={route} />
                <div className={styles.wrapper}>
                    {data
                        .slice(0, 6)
                        .map(({ id, name, picUrl, rcmdtext, radioFeeType }) => (
                            <DjradioItem
                                key={id}
                                id={id}
                                name={name}
                                picUrl={picUrl}
                                rcmdtext={rcmdtext}
                                className={cn(styles.item)}
                                fee={radioFeeType === RADIO_FEE_TYPE.PAY}
                            />
                        ))}
                </div>
            </div>
        )
    }
}

export default RadioHot
