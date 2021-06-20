import React, { Component } from "react";
import styles from "./style.module.less";
import PropTypes from "prop-types";

export class Artists extends Component {
  static defaultProps = {
    artists: [],
    artistName: "",
  };

  static propTypes = {
    artists: PropTypes.array,
    artistName: PropTypes.string,
  };
  render() {
    const { artists, artistName } = this.props;
    return (
      <div className={styles.wrapper}>
        {artistName ? (
          <div>
            <span className={styles.singer}>{artistName}</span>
          </div>
        ) : (
          artists.map(({ name }, index) => (
            <div key={index}>
              <span className={styles.singer}>{name}</span>
              {index !== artists.length - 1 ? (
                <span className={styles.slash}>/</span>
              ) : null}
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Artists;
