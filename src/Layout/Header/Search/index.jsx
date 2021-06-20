import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { showSearchDrawer } from "@/store/app/action";
import { Input } from "antd";
import styles from "./style.module.less";
class Search extends Component {
  handleClick = () => {
    if (this.props.showDrawer) return;
    this.props.dispatch(
      showSearchDrawer({
        showDrawer: true,
      })
    );
  };
  onPressEnter = (e) => {
    console.log(e);
  };

  onChange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className={styles.search}>
        <div className={styles.input}>
          <SearchOutlined />
          <Input
            placeholder="搜索"
            size="middle"
            bordered={false}
            allowClear
            onChange={this.onChange}
            onClick={this.handleClick}
            onPressEnter={this.onPressEnter}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showDrawer: state.app.showDrawer,
});

export default connect(mapStateToProps)(Search);
