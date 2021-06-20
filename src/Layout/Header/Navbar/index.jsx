import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.less";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          label: "个性推荐",
          path: "/discover/recommend",
        },
        {
          label: "歌单",
          path: "/discover/playlist",
        },
        {
          label: "主播电台",
          path: "/discover/djradio",
        },
        {
          label: "排行榜",
          path: "/discover/toplist",
        },
        {
          label: "歌手",
          path: "/discover/singer",
        },
        {
          label: "最新音乐",
          path: "/discover/latest",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.navbar}>
        {this.state.list.map(({ path, label }, index) => (
          <NavLink
            className={styles.navbarMenuItem}
            activeClassName={styles.active}
            key={index}
            exact
            to={path}
          >
            {label}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Navbar;
