import React, { Component } from 'react'
import { Carousel } from 'antd'
import PropTypes from 'prop-types'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import CategoryItem from './CategoryItem'
import styles from './style.module.less'

const ref = React.createRef()
const DOWN = 'down'
const UP = 'up'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
    }
    static defaultProps = {
        categories: [],
    }
    static propTypes = {
        categories: PropTypes.array,
    }

    afterChange = (current) => {
        this.setState({
            current,
        })
    }

    prev = () => {
        if (this.state.current === 0) return
        ref.current.prev()
    }

    next = () => {
        if (this.state.current >= this.props.categories.length - 1) return
        ref.current.next()
    }

    onWheel = (e) => {
        let direction = e.deltaY > 0 ? DOWN : UP
        if (direction === DOWN) {
            this.prev()
        } else {
            this.next()
        }
    }

    handleClickCategory = (id) => {
        console.log(id)
    }

    createSlide = (item) => {
        return (
            <div className={styles.slideItem}>
                {item.map(({ id, name, pic56x56Url }) => (
                    <CategoryItem
                        key={id}
                        id={id}
                        name={name}
                        imageUrl={pic56x56Url}
                        onClick={this.handleClickCategory}
                    />
                ))}
            </div>
        )
    }

    render() {
        const { categories } = this.props
        const { current } = this.state
        return (
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <LeftOutlined
                        onClick={this.prev}
                        className={cn({ [styles.hide]: current === 0 })}
                    />
                </div>
                <div className={styles.content} onWheel={this.onWheel}>
                    <Carousel
                        dots={false}
                        afterChange={this.afterChange}
                        ref={ref}>
                        {categories.map((e, index) => {
                            return (
                                <div key={index} className={styles.slide}>
                                    {this.createSlide(e)}
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={styles.right}>
                    <RightOutlined
                        onClick={this.next}
                        className={cn({
                            [styles.hide]: current >= categories.length - 1,
                        })}
                    />
                </div>
            </div>
        )
    }
}

export default Index
