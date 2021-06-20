import React, { Component } from "react";
import PropTypes from "prop-types";
// import { MenuItem } from "@/components/Menu";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import styles from "./style.module.less";

export class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          icon: "music_cloud_disk",
          label: "我喜欢的音乐",
          isActive: true,
        },
        {
          icon: "radio_station",
          label: "我的歌单",
          isActive: false,
        },
        {
          icon: "collection",
          label: "我的歌单",
          isActive: false,
        },
      ],
      isCollapsed: false,
    };
  }

  static defaultProps = {
    title: "",
    showAddIcon: true,
    defaultValue: false,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    showAddIcon: PropTypes.bool,
    defaultValue: PropTypes.bool,
  };

  handleClick = (e) => {
    console.log(e);
  };

  hanldeAdd = (e) => {
    e.stopPropagation();
  };

  setIsCollapsed = (isCollapsed) => {
    this.setState({
      isCollapsed,
    });
  };

  componentDidMount() {
    this.setState({
      isCollapsed: this.props.defaultValue,
    });
  }

  render() {
    const { isCollapsed } = this.state;
    const { title, showAddIcon } = this.props;
    const style = {
      collapsed: {
        display: "none",
      },
      expanded: {
        display: "block",
      },
    };
    const Icon = () => {
      return !isCollapsed ? <CaretDownOutlined /> : <CaretRightOutlined />;
    };
    return (
      <div className={styles.playList}>
        <div
          className={styles.title}
          onClick={() => this.setIsCollapsed(!isCollapsed)}
        >
          <div className={styles.icon}>
            <Icon />
          </div>
          <span className={styles.text}>{title}</span>
          {showAddIcon && (
            <PlusOutlined className={styles.add} onClick={this.hanldeAdd} />
          )}
        </div>
        <div
          styles={isCollapsed ? style.collapsed : style.expanded}
          className={styles.content}
        >
          {/* {this.state.list.map((e) => (
            <MenuItem
              label={e.label}
              icon={e.icon}
              path={e.path}
              key={e.icon}
              onClick={() => this.handleClick(e)}
            />
          ))} */}
        </div>
      </div>
    );
  }
}

export default PlayList;
