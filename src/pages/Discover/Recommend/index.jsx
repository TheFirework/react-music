import React, { Component } from 'react'
import Banner from "./Banner";
import Mv from './Mv';
import NewSong from './NewSong';
import Playlist from "./Playlist";
import Djradio from './Djradio'
import styles from "./style.module.less";

export class Recommend extends Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.box}>
            <Banner />
          </div>
          <div className={styles.card}>
            <Playlist />
          </div>
          <div className={styles.card}>
            <NewSong />
          </div>
          <div className={styles.card}>
            <Mv />
          </div>
          <div className={styles.card}>
            <Djradio />
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
