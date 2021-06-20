import React, { Component } from 'react'
import PropTypes from "prop-types";
import cn from "classnames";
import styles from './style.module.less'
export class BannerItem extends Component {
  static defaultProps = {
    typeTitle: "",
    titleColor: "red",
    imageUrl: "",
    className: "",
    onClick: () => {},
  };

  static propTypes = {
    typeTitle: PropTypes.string,
    titleColor: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick:PropTypes.func
  };
  render() {
    const { className, typeTitle, titleColor, imageUrl, onClick } = this.props;
    return (
      <div className={cn(styles.swiperSlide, className)} onClick={onClick}>
        <img src={imageUrl} alt="img" />
        <div
          className={styles.typeTitle}
          style={{
            backgroundColor: titleColor,
          }}
        >
          {typeTitle}
        </div>
      </div>
    );
  }
}

export default BannerItem
