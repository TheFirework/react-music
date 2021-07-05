import React, {Component} from 'react'
import Banner from "../../../components/Banner";
import Mv from './Mv';
import NewSong from './NewSong';
import Playlist from "./Playlist";
import Djradio from './Djradio'
import styles from "./style.module.less";
import {getBanner} from '@/api/personalized'

export class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }
    }

    componentDidMount() {
        getBanner().then((banners) => {
            this.setState({
                banners,
            })
        })
    }


    render() {
        const {banners} = this.state
        return (
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    {
                        banners && <Banner banners={banners}/>
                    }
                </div>
                <div className={styles.card}>
                    <Playlist/>
                </div>
                <div className={styles.card}>
                    <NewSong/>
                </div>
                <div className={styles.card}>
                    <Mv/>
                </div>
                <div className={styles.card}>
                    <Djradio/>
                </div>
            </div>
        );
    }
}

export default Recommend;
