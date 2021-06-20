import React, { Component } from "react";
import { Spin } from "antd";
import LinkHeader from "@/components/LinkHeader";
import MvItem from "./MvItem";
import styles from "./style.module.less";
import { getPersonalizedMv } from "../../../../api/personalized";
export class Mv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mvList: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    getPersonalizedMv().then((mvList) => {
      this.setState({
        mvList,
        loading: false,
      });
    });
  }
  render() {
    const { loading, mvList } = this.state;
    return (
      <div>
        <LinkHeader title="推荐MV" route="/video/mv" />
        <Spin spinning={loading}>
          <div className={styles.content}>
            {mvList.map(
              ({ id, name, playCount, picUrl, artistName }, index) => (
                <MvItem
                  key={index}
                  id={id}
                  name={name}
                  playCount={playCount}
                  picUrl={picUrl}
                  artistName={artistName}
                />
              )
            )}
          </div>
        </Spin>
      </div>
    );
  }
}

export default Mv;
