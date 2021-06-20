import React, { Component } from 'react'
import PropTypes from "prop-types";
import Artists from '../../../../../components/Artists'
import PlayCount from '../../../../../components/PlayCount'
import styles from './style.module.less'
export class MvItem extends Component {
  static defaultProps = {
    id: Number,
    name: "",
    picUrl: "",
    playCount: Number,
    song: null,
  };

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    picUrl: PropTypes.string,
    playCount: PropTypes.number,
    artistName: PropTypes.string,
  };
  render() {
    const { id, name, playCount, picUrl, artistName } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.cover}>
          <img src={picUrl} alt={name} />
          <PlayCount playCount={playCount} className={styles.playCount} />
        </div>
        <div className={styles.name}>{name}</div>
        <Artists artistName={artistName} />
      </div>
    );
  }
}

export default MvItem
