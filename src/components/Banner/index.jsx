import React, { Component } from 'react'
import { TARGET_TYPE } from '@/types/song'
import PropTypes from 'prop-types'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import BannerItem from './BannerItem'
import BannerPagination from './BannerPagination'
import BannerButton from './BannerButton'
import styles from './style.module.less'

export class Banner extends Component {
    static defaultProps = {
        banners: [],
        autoplay: true,
        interval: 2500,
        height: 200,
    }

    static propTypes = {
        banners: PropTypes.array.isRequired,
        autoplay: PropTypes.bool,
        interval: PropTypes.number,
        height: PropTypes.number,
    }

    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
    }

    componentDidMount() {
        this.autoPlay()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    autoPlay = () => {
        if (!this.props.autoplay) return
        this.timer = setInterval(() => {
            if (!this.props.banners.length) return
            this.setCurrent(
                (this.state.current + 1) % this.props.banners.length
            )
        }, this.props.interval)
    }

    pause = () => {
        this.timer && clearInterval(this.timer)
    }

    handleSlideClick = (index) => {
        if (this.state.current === index) return
        this.setCurrent(index)
    }

    next = () => {
        this.setCurrent(this.state.current + 1)
    }

    prev = () => {
        this.setCurrent(this.state.current - 1)
    }

    handleBulletChange = (index) => {
        this.setCurrent(index)
    }

    setCurrent = (index) => {
        let { banners } = this.props
        if (index > banners.length - 1) {
            index = 0
        }
        if (index < 0) {
            index = banners.length - 1
        }
        this.setState({
            current: index,
        })
    }

    genClassName = (index) => {
        const { current } = this.state
        const { banners } = this.props
        const len = banners.length
        const left = (current - 1 + len) % len
        const right = (current + 1) % len
        const classes = {
            [current]: styles.middle,
            [left]: styles.left,
            [right]: styles.right,
        }
        return classes[index]
    }

    render() {
        const { current } = this.state
        const { height, banners } = this.props
        return (
            <div>
                {banners && (
                    <div className={styles.swiper}>
                        <div
                            className={styles.swiperContainer}
                            style={{
                                height: `${height}px`,
                            }}>
                            <div
                                className={styles.swiperWrapper}
                                onMouseOver={this.pause}
                                onMouseLeave={this.autoPlay}>
                                {banners.map(
                                    (
                                        {
                                            targetId,
                                            imageUrl,
                                            pic,
                                            typeTitle,
                                            titleColor,
                                            targetType,
                                        },
                                        index
                                    ) => {
                                        const className =
                                            this.genClassName(index) ||
                                            styles.hidden
                                        const isMusicType =
                                            targetType === TARGET_TYPE.MUSIC
                                        return (
                                            <BannerItem
                                                key={index}
                                                typeTitle={typeTitle}
                                                titleColor={titleColor}
                                                imageUrl={imageUrl || pic}
                                                className={className}
                                                onClick={
                                                    isMusicType
                                                        ? () =>
                                                              this.handleSlideClick(
                                                                  index,
                                                                  targetId
                                                              )
                                                        : null
                                                }
                                            />
                                        )
                                    }
                                )}
                            </div>
                            <BannerButton
                                className={styles.swiperButtonPrev}
                                onClick={this.prev}
                                onMouseOver={this.pause}
                                onMouseLeave={this.autoPlay}
                                render={() => <LeftOutlined />}
                            />
                            <BannerButton
                                className={styles.swiperButtonNext}
                                onClick={this.prev}
                                onMouseOver={this.pause}
                                onMouseLeave={this.autoPlay}
                                render={() => <RightOutlined />}
                            />
                        </div>
                        <BannerPagination
                            banners={banners}
                            current={current}
                            onMouseOver={this.handleBulletChange}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Banner
