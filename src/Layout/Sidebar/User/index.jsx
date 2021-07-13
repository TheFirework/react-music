import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Popover } from 'antd'
import { UserOutlined, CaretRightOutlined } from '@ant-design/icons'
import LoginModal from '../LoginModal'
import styles from './style.module.less'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginModal: false,
        }
    }
    handleShowLoginModal = (value) => {
        this.setState({
            showLoginModal: value,
        })
    }

    render() {
        const { showLoginModal } = this.state
        const { isLogged, user } = this.props

        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        )

        return (
            <div className={styles.user}>
                <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    src={user.profile.avatarUrl}
                    className={styles.avatar}
                />
                {isLogged ? (
                    <Popover
                        placement="rightTop"
                        content={content}
                        trigger="click">
                        <span className={styles.username}>
                            {user.profile.nickname}
                        </span>
                        <CaretRightOutlined
                            styles={{ color: 'rgba(140,140,140,1)' }}
                            className={styles.icon}
                        />
                    </Popover>
                ) : (
                    <>
                        <span
                            className={styles.username}
                            onClick={() => this.handleShowLoginModal(true)}>
                            未登录
                        </span>
                        <CaretRightOutlined
                            styles={{ color: 'rgba(140,140,140,1)' }}
                            className={styles.icon}
                        />
                    </>
                )}
                {showLoginModal && (
                    <LoginModal
                        show={showLoginModal}
                        onClose={this.handleShowLoginModal}
                    />
                )}
            </div>
        )
    }
}

export default connect((state) => ({
    isLogged: state.app.isLogged,
    user: state.app.user,
}))(User)
