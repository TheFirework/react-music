import React, { Component } from "react";
import LinkHeader from "@/components/LinkHeader";
import { Spin } from "antd";
import RadioItem from "./RadioItem";
import styles from "./style.module.less";
import { getPersonalizedDj } from "../../../../api/personalized";
export class Djradio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      djList: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    getPersonalizedDj().then((djList) => {
      this.setState({
        djList,
        loading: false,
      });
    });
  }
  render() {
    const { loading, djList } = this.state;
    return (
      <div>
        <LinkHeader title="主播电台" route="/discover/djradio" />
        <Spin spinning={loading}>
          <div className={styles.content}>
            <div className={styles.list}>
              {djList
                .slice(0, 3)
                .map(({ name, id, picUrl, copywriter }, index) => (
                  <RadioItem
                    key={index}
                    id={id}
                    name={name}
                    picUrl={picUrl}
                    copywriter={copywriter}
                  />
                ))}
            </div>
            <div className={styles.list}>
              {djList.length > 3 && djList
                .slice(3, 6)
                .map(({ name, id, picUrl, copywriter }, index) => (
                  <RadioItem
                    key={index}
                    id={id}
                    name={name}
                    picUrl={picUrl}
                    copywriter={copywriter}
                  />
                ))}
            </div>
          </div>
        </Spin>
      </div>
    );
  }
}

export default Djradio;
