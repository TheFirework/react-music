import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import User from "./User";
import PlayList from "./PlayList";
import {Menu} from '../../components/Menu';
import styles from "./style.module.less";
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "",
          menu: [
            {
              icon: "find_music",
              label: "发现音乐",
              isActive: true,
              path: "/discover/recommend",
            },
            {
              icon: "fm",
              label: "私人FM",
              isActive: false,
              path: "/fm",
            },
            {
              icon: "video",
              label: "视频",
              isActive: false,
              path: "/video",
            },
            {
              icon: "friend",
              label: "朋友",
              isActive: false,
              path: "/friend",
            },
          ],
        },
        {
          title: "我的音乐",
          menu: [
            {
              icon: "music_cloud_disk",
              label: "我的音乐云盘",
              isActive: true,
              path: "",
            },
            {
              icon: "radio_station",
              label: "我的电台",
              isActive: false,
              path: "",
            },
            {
              icon: "collection",
              label: "我的收藏",
              isActive: false,
              path: "",
            },
          ],
        },
      ],
    };
  }

  handleClick = (e) => {
    this.props.history.push(e.path)
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <User />
        <div className={styles.content}>
          <Menu list={this.state.list} onClick={this.handleClick} />
          <PlayList title="创建的歌单" />
          <PlayList title="收藏的歌单" showAddIcon={false} />
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
