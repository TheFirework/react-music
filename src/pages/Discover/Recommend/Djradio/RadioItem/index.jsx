import React, { Component } from 'react'
import cn from "classnames";
import styles from './style.module.less'
export class RadioItem extends Component {
    render() {
        const { name, picUrl, copywriter } = this.props;
        return (
          <div className={cn(styles.wrapper)}>
            <div className={styles.cover}>
              <img src={picUrl} alt={name} />
            </div>
            <div className={styles.content}>
              <div className={styles.copywriter}>{copywriter}</div>
              <div className={styles.name}>{name}</div>
            </div>
          </div>
        );
    }
}

export default RadioItem
