import React, { Component } from 'react';
import {Button} from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from "./style.module.less";
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const style = {
            fontSize:'14px',
            color: 'rgab(68,68,68,1)'
        }
        return (
          <div className={styles.navigation}>
            <Button
              type="text"
              icon={<LeftOutlined style={style} />}
              shape="circle"
              className="mr10"
            />
            <Button
              type="text"
              icon={<RightOutlined style={style} />}
              shape="circle"
              disabled
            />
          </div>
        );
    }
}
 
export default Navigation;