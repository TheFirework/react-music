import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import styles from './style.module.less'

export class Menu extends Component {
  static defaultProps = {
    title: "",
    list: [],
  };

  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
  };

  render() {
    const { list, onClick } = this.props;
    return (
      <div>
        {list.map((e, key) => (
          <div className={styles.menu} key={key}>
            {e.title && <div className={styles.title}>{e.title}</div>}
            {e.menu.map((e, i) => (
              <MenuItem
                label={e.label}
                icon={e.icon}
                path={e.path}
                key={`${key}_${i}`}
                onClick={() => onClick(e)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
