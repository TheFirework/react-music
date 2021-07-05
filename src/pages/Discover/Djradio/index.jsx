import React, { Component } from 'react'
import Banner from '../../../components/Banner'
import Category from './Category'
import Paygift from './Paygift'
import RadioHot from './RadioHot'
import {
    getDjBanner,
    getDjCategory,
    getPaygift,
    getPersonalizeRecommendDj,
    getDjRadioHotByCateId,
} from '../../../api/dj'
import styles from './style.module.less'

const CREATE_COVER_CATEID = 2001 //创作翻唱
const AUDIO_BOOK = 10001 // 有声书
const MUSIC_RECOMMEND = 2 // 音乐推荐
const EMOTION = 3 // 情感
const TALK_SHOW = 8 // 脱口秀
export class Djradio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banners: [],
            categories: [],
            paygiftList: [],
            recommends: [],
            createCovers: [],
            audioBooks: [],
            musicRecommend: [],
            emotionList: [],
            talkShowList: [],
        }
    }

    componentDidMount() {
        getDjBanner().then((banners) => {
            this.setState({
                banners,
            })
        })
        getDjCategory().then((categories) => {
            this.setState({
                categories,
            })
        })
        getPaygift().then((paygiftList) => {
            this.setState({
                paygiftList,
            })
        })
        getPersonalizeRecommendDj().then((recommends) => {
            this.setState({
                recommends,
            })
        })
        getDjRadioHotByCateId({
            cateId: CREATE_COVER_CATEID,
            limit: 5,
        }).then((createCovers) => {
            this.setState({
                createCovers,
            })
        })
        getDjRadioHotByCateId({
            cateId: AUDIO_BOOK,
            limit: 6,
        }).then((audioBooks) => {
            this.setState({
                audioBooks,
            })
        })

        getDjRadioHotByCateId({
            cateId: MUSIC_RECOMMEND,
            limit: 6,
        }).then((musicRecommend) => {
            this.setState({
                musicRecommend,
            })
        })

        getDjRadioHotByCateId({
            cateId: EMOTION,
            limit: 6,
        }).then((emotionList) => {
            this.setState({
                emotionList,
            })
        })

        getDjRadioHotByCateId({
            cateId: TALK_SHOW,
            limit: 6,
        }).then((talkShowList) => {
            this.setState({
                talkShowList,
            })
        })
    }

    render() {
        const {
            banners,
            categories,
            paygiftList,
            recommends,
            createCovers,
            audioBooks,
            musicRecommend,
            emotionList,
            talkShowList,
        } = this.state
        return (
            <div className={styles.wrapper}>
                <div className={styles.banner}>
                    {banners && <Banner banners={banners} />}
                </div>
                <div className={styles.block}>
                    {categories && <Category categories={categories} />}
                </div>
                <div className={styles.block}>
                    {paygiftList && <Paygift data={paygiftList} />}
                </div>
                <div className={styles.block}>
                    {recommends && (
                        <RadioHot title={'电台个性推荐'} data={recommends} />
                    )}
                </div>
                <div className={styles.block}>
                    {audioBooks && (
                        <RadioHot title={'有声书'} data={audioBooks} />
                    )}
                </div>
                <div className={styles.block}>
                    {createCovers && (
                        <RadioHot title={'创作翻唱'} data={createCovers} />
                    )}
                </div>
                <div className={styles.block}>
                    {musicRecommend && (
                        <RadioHot title={'音乐推荐'} data={musicRecommend} />
                    )}
                </div>
                <div className={styles.block}>
                    {emotionList && (
                        <RadioHot title={'情感'} data={emotionList} />
                    )}
                </div>
                <div className={styles.block}>
                    {talkShowList && (
                        <RadioHot title={'脱口秀'} data={talkShowList} />
                    )}
                </div>
            </div>
        )
    }
}

export default Djradio
