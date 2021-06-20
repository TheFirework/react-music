import React, { Component } from 'react'
import { CaretRightOutlined } from "@ant-design/icons";
import styles from './style.module.less'
export class PlayIcon extends Component {
    render() {
        return (
          <div className={styles.wrapper}>
            <CaretRightOutlined />
          </div>
        );
    }
}

export default PlayIcon
