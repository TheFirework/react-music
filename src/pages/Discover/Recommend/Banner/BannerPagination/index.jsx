import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./style.module.less";
export class BannerPagination extends Component {
  static defaultProps = {
    banners: [],
    current: 0,
    onMouseOver: () => {},
  };

  static propTypes = {
    banners: PropTypes.array,
    current: PropTypes.number,
    onMouseOver: PropTypes.func,
  };
  render() {
    const { banners, current, onMouseOver } = this.props;
    return (
      <div className={styles.swiperPagination}>
        {banners.map((item, index) => (
          <span
            key={index}
            className={cn(styles.bullet, {
              [styles.bulletActive]: current === index,
            })}
            onMouseOver={() => onMouseOver(index)}
          ></span>
        ))}
      </div>
    );
  }
}

export default BannerPagination;
