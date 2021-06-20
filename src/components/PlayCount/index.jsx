import React, { Component } from 'react'
import cn from "classnames";
import PropTypes from "prop-types";
import styles from './style.module.less'
import {formatNumber} from '@/utils/math'
import SvgIcon from '../SvgIcon'
export class PlayCount extends Component {
  static propTypes = {
    playCount: PropTypes.number,
    className: PropTypes.string,
  };
  render() {
    const { playCount, className } = this.props;
    return (
      <div className={cn(styles.wrapper, className)}>
        <SvgIcon icon="play" className={styles.play} />
        {formatNumber(playCount)}
      </div>
    );
  }
}

export default PlayCount
