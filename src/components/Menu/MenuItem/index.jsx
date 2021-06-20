import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import styles from "./style.module.less";


export class MenuItem extends Component {
  render() {
    const { label, icon, path } = this.props;

    return (
      <div className={styles.itemWrap}>
        <NavLink
          className={styles.menuItem}
          activeClassName={styles.active}
          exact
          to={path}
        >
          <SvgIcon icon={icon} className={styles.icon} />
          <span className={styles.label}>{label}</span>
        </NavLink>
      </div>
    );
  }
}

export default MenuItem;
