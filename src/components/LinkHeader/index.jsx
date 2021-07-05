import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RightOutlined } from '@ant-design/icons'
import styles from './style.module.less'
export class LinkHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        route: PropTypes.string,
    }
    handleClick = () => {
        this.props.history.push(this.props.route)
    }
    render() {
        const { route } = this.props
        return (
            <div className={styles.wrapper}>
                <span className={styles.content} onClick={this.handleClick}>
                    {this.props.title}
                    {route && <RightOutlined className={styles.icon} />}
                </span>
            </div>
        )
    }
}

export default withRouter(LinkHeader)
