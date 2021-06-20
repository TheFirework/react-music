import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Footer } from "./Footer";
import { showSearchDrawer } from "@/store/app/action";
import routes from "../router/routes";
import {renderRoutes} from '../router'

import styles from "./style.module.less";


class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{renderRoutes(routes)}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showDrawer: state.app.showDrawer,
});

const dispatchToProps = (dispatch) => {
  return {
    onClose() {
      dispatch(
        showSearchDrawer({
          showDrawer: false,
        })
      );
    },
  };
};

export default connect(mapStateToProps, dispatchToProps)(Layout);
