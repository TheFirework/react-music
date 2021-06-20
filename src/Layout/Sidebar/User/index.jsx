import React, { Component } from 'react'
import { Avatar } from "antd";
import { UserOutlined, CaretRightOutlined } from "@ant-design/icons";
import styles from "./style.module.less";

export class User extends Component {
    render() {
        return (
          <div className={styles.user}>
            <Avatar
              size={40}
              icon={<UserOutlined />}
              className={styles.avatar}
            />
            <span className={styles.username}>
              未登录未登录未登录未登录未登录
            </span>
            <CaretRightOutlined
              styles={{ color: "rgba(140,140,140,1)" }}
              className={styles.icon}
            />
          </div>
        );
    }
}

export default User
