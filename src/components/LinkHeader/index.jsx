import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { RightOutlined } from "@ant-design/icons";
import styles from "./style.module.less";
export class LinkHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  };
  handleClick = () => {
    this.props.history.push(this.props.route);
  };
  render() {
    return (
      <div className={styles.wrapper} onClick={this.handleClick}>
        <span className={styles.content}>
          {this.props.title}
          <RightOutlined className={styles.icon} />
        </span>
      </div>
    );
  }
}

export default withRouter(LinkHeader);
