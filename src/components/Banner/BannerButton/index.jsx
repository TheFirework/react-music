import React, { Component } from 'react'
import cn from "classnames";
import PropTypes from "prop-types";
import styles from './style.module.less'
export class BannerButton extends Component {
  static defaultProps = {
    className: "",
    onMouseLeave: () => {},
    onMouseOver: () => {},
    onClick: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onClick: PropTypes.func,
    render:PropTypes.func.isRequired,
  };
  render() {
    const { className, onMouseLeave, onMouseOver, onClick, render } =
      this.props;
    return (
      <div
        className={cn(styles.swiperButton, className)}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {render()}
      </div>
    );
  }
}

export default BannerButton
