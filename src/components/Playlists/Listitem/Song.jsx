import React, { Component } from "react";
import PlayIcon from "../../PlayIcon";
import recommendsongs from "../../../static/images/recommendsongs.jpg";
import styles from "./style.module.less";
export class Song extends Component {
  render() {
    let day = new Date().getDate();
    const { onClick } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.cover}>
          <img src={recommendsongs} alt="img" onClick={onClick} />
          <div className={styles.day}>{day}</div>
          <div className={styles.playIcon}>
            <PlayIcon />
          </div>
        </div>
        <div className={styles.name} onClick={onClick}>
          每日歌曲推荐
        </div>
      </div>
    );
  }
}

export default Song;
