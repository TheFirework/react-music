import React, { Component } from 'react'
import PropTypes from "prop-types";
import Artists from '../../../../../components/Artists'
import cn from "classnames";
import styles from "./style.module.less";
export class Song extends Component {
  static defaultProps = {
    id: Number,
    name: "",
    picUrl: "",
    song: null,
    index: Number,
  };

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    picUrl: PropTypes.string,
    song: PropTypes.object,
    index: PropTypes.number,
  };
  render() {
    const { name, picUrl, song, index } = this.props;
    return (
      <div className={cn(styles.wrapper)}>
        <div className={styles.cover}>
          <img src={picUrl} alt={name} />
        </div>
        <div className={styles.index}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{name}</div>
          <Artists artists={song?.artists} />
        </div>
      </div>
    );
  }
}

export default Song;
