import React, { Component } from 'react'
import { Avatar, Popover } from 'antd'
import { UserOutlined, CaretRightOutlined } from '@ant-design/icons'
import LoginModal from '../LoginModal'
import styles from './style.module.less'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginModal: false,
            isLogged: false,
        }
    }
    handleShowLoginModal = (value) => {
        this.setState({
            showLoginModal: value,
        })
    }

    render() {
        const { showLoginModal, isLogged } = this.state
        return (
            <div className={styles.user}>
                <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    className={styles.avatar}
                />
                {isLogged ? (
                    <Popover>
                        <span className={styles.username}>退出登录</span>
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

export default User
