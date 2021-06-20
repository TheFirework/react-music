import React, { Component } from 'react'
import { Spin } from "antd";
import LinkHeader from "@/components/LinkHeader";
import styles from './style.module.less'
import Song from './Song';
import {getPersonalizedNewSong} from '../../../../api/personalized'
export class NewSong extends Component {
  constructor(props){
    super(props)
    this.state = {
      musicList:[],
      loading:false
    };
  }
  componentDidMount(){
    this.setState({
      loading: true,
    });
    getPersonalizedNewSong().then(musicList=>{
      this.setState({
        musicList,
        loading: false,
      });
    });
  }
  render() {
    const { loading, musicList } = this.state;
    return (
      <div>
        <LinkHeader title="最新音乐" route="/discover/latest" />
        <Spin spinning={loading}>
          <div className={styles.content}>
            <div className={styles.list}>
              {musicList
                .slice(0, 5)
                .map(({ id, name, picUrl, song, ...others }, index) => (
                  <Song
                    key={name}
                    index={index}
                    id={id}
                    name={name}
                    picUrl={picUrl}
                    song={song}
                    {...others}
                  />
                ))}
            </div>
            <div className={styles.list}>
              {musicList.length > 4 &&
                musicList
                  .slice(5, 10)
                  .map(({ id, name, picUrl, song, ...others }, index) => (
                    <Song
                      key={name}
                      index={index + 5}
                      id={id}
                      name={name}
                      picUrl={picUrl}
                      song={song}
                      {...others}
                    />
                  ))}
            </div>
          </div>
        </Spin>
      </div>
    );
  }
}

export default NewSong
