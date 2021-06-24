import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import PlayCount from '../../PlayCount'
import PlayIcon from '../../PlayIcon'
import styles from './style.module.less'

export class Listitem extends Component {
  static propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    picUrl: PropTypes.string,
  };

  handleClick = (id) => {
    console.log(id);
    // this.props.history.push();
  }

  render() {
    const { name, picUrl, id, playCount } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.cover} onClick={() => this.handleClick(id)}>
          <img src={picUrl} alt="img" />
          <PlayCount playCount={playCount} className={styles.playCount} />
          <div className={styles.playIcon}>
            <PlayIcon />
          </div>
        </div>
        <div className={styles.name} onClick={() => this.handleClick(id)}>
          {name}
        </div>
      </div>
    );
  }
}

export default withRouter(Listitem);
