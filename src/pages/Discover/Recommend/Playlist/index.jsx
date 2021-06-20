import React, { Component } from 'react'
import { Spin } from "antd";
import LinkHeader from "@/components/LinkHeader";
import PlayList from "../../../../components/PlayList";
import { getPersonalized } from "../../../../api/personalized";
export class Playlist extends Component {
  constructor(props){
    super(props)
    this.state = {
      playlist:[],
      loading:false
    }
  }
  componentDidMount(){
    this.setState({
      loading: true,
    });
    getPersonalized().then((playlist) => {
      this.setState({
        playlist,
        loading: false,
      });
    });
  }
  render() {
    const {loading,playlist} = this.state
    return (
      <div>
        <LinkHeader title="推荐歌单" route="/discover/playlist" />
        <Spin spinning={loading}>
          <PlayList playlist={playlist} />
        </Spin>
      </div>
    );
  }
}

export default Playlist;
