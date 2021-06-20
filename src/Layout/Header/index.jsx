import React, { Component } from 'react';

import Navigation from './Navigation'
import Navbar from "./Navbar";
import Search from './Search'

import styles from './style.module.less'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className={styles.header}>
            <Navigation />
            <div className={styles.topbar}>
              <Navbar />
              <Search />
            </div>
          </div>
        );
    }
}
 
export default Header;