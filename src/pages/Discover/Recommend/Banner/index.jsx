import React, { Component } from "react";
import { Spin } from "antd";
import { TARGET_TYPE } from "@/types/song";
import PropTypes from "prop-types";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BannerItem from "./BannerItem";
import BannerPagination from "./BannerPagination";
import BannerButton from "./BannerButton";
import styles from "./style.module.less";
import { getBanner } from "../../../../api/personalized";

export class Banner extends Component {
  static defaultProps = {
    autoplay: true,
    interval: 2500,
    height: 200,
  };

  static propTypes = {
    autoplay: PropTypes.bool,
    interval: PropTypes.number,
    height: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      banners: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    getBanner().then((banners) => {
      this.setState({
        banners,
        loading: false,
      });
      this.autoPlay();
    });
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  autoPlay = () => {
    if (!this.props.autoplay) return;
    this.timer = setInterval(() => {
      if (!this.state.banners.length) return;
      this.setCurrent((this.state.current + 1) % this.state.banners.length);
    }, this.props.interval);
  };

  pause = () => {
    this.timer && clearInterval(this.timer);
  };

  handleSlideClick = (index) => {
    if (this.state.current === index) return;
    this.setCurrent(index);
  };

  next = () => {
    this.setCurrent(this.state.current + 1);
  };

  prev = () => {
    this.setCurrent(this.state.current - 1);
  };

  handleBulletChange = (index) => {
    this.setCurrent(index);
  };

  setCurrent = (index) => {
    let { banners } = this.state;
    if (index > banners.length - 1) {
      index = 0;
    }
    if (index < 0) {
      index = banners.length - 1;
    }
    this.setState({
      current: index,
    });
  };

  genClassName = (index) => {
    const { banners, current } = this.state;
    const len = banners.length;
    const left = (current - 1 + len) % len;
    const right = (current + 1) % len;
    const classes = {
      [current]: styles.middle,
      [left]: styles.left,
      [right]: styles.right,
    };
    return classes[index];
  };

  render() {
    const { current, banners, loading } = this.state;
    const { height } = this.props;
    return (
      <Spin spinning={loading}>
        {banners && (
          <div className={styles.swiper}>
            <div
              className={styles.swiperContainer}
              style={{
                height: `${height}px`,
              }}
            >
              <div
                className={styles.swiperWrapper}
                onMouseOver={this.pause}
                onMouseLeave={this.autoPlay}
              >
                {banners.map(
                  (
                    { targetId, imageUrl, typeTitle, titleColor, targetType },
                    index
                  ) => {
                    const className = this.genClassName(index) || styles.hidden;
                    const isMusicType = targetType === TARGET_TYPE.MUSIC;
                    return (
                      <BannerItem
                        key={index}
                        typeTitle={typeTitle}
                        titleColor={titleColor}
                        imageUrl={imageUrl}
                        className={className}
                        onClick={
                          isMusicType
                            ? () => this.handleSlideClick(index, targetId)
                            : null
                        }
                      />
                    );
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
      </Spin>
    );
  }
}

export default Banner;
