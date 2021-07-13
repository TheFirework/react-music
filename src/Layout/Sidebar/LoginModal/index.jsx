import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Modal, Form, Input } from 'antd'
import { MobileOutlined, LockOutlined } from '@ant-design/icons'
import styles from './style.module.less'
import { login } from '@/api/user'
import * as ACTION from '../../../store/app/action'
export class LoginModal extends Component {
    formRef = React.createRef()

    static defaultProps = {
        show: false,
        onClose: () => {},
    }
    static propTypes = {
        show: PropTypes.bool,
        onClose: PropTypes.func,
    }
    onCancel = () => {
        this.props.onClose(false)
    }
    handleLogin = async (payload) => {
        login(payload).then(
            (result) => {
                if (result) {
                    this.props.login({
                        ...result,
                        userId: result.profile.userId,
                    })
                }
            },
            (error) => {
                console.log(error)
            }
        )
    }
    render() {
        const { show } = this.props
        return (
            <div>
                <Modal
                    className={styles.loginModal}
                    title="登录"
                    visible={show}
                    footer={null}
                    mask={false}
                    centered
                    destroyOnClose
                    maskClosable={false}
                    width={350}
                    onCancel={this.onCancel}>
                    <Form
                        ref={this.formRef}
                        name="login"
                        className={styles.loginForm}
                        onFinish={this.handleLogin}>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号',
                                },
                                {
                                    pattern: /^1[0-9]{10}/,
                                    message: '请输入正确的手机号',
                                },
                            ]}>
                            <Input
                                prefix={<MobileOutlined />}
                                placeholder="请输入手机号"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入登录密码',
                                },
                            ]}>
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <button className={styles.loginFormButton}>
                                登录
                            </button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { login: ACTION.login })(LoginModal)
