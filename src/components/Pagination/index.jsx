import React, { Component } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import styles from './style.module.less'
import cn from 'classnames'

const SHOW_ALL_PAGE_COUNT = 10
const PAGE_SCALE = 3
const GROUP_COUNT = 5

export class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.current || 1, // 当前页数
            totalPage: Math.ceil(props.total / props.pageSize) || 1, // 总页数
            isFirstPage: false, // 是否首页
            isLastPage: false, // 是否最后一页
            groupCount: GROUP_COUNT, // 分组页数
        }
    }
    static defaultProps = {
        current: 1,
        total: 0,
        pageSize: 100,
        onChange: () => {},
    }

    static propTypes = {
        current: PropTypes.number,
        total: PropTypes.number,
        pageSize: PropTypes.number,
        onChange: PropTypes.func,
    }
    handlePrev = (currentPage) => {
        if (currentPage === 1) return
        this.handleClickItem(currentPage - 1)
    }
    handleNext = (currentPage, totalPage) => {
        if (currentPage === totalPage) return
        this.handleClickItem(currentPage + 1)
    }
    handleClickItem = (page) => {
        this.setState({
            currentPage: page,
        })
        this.props.onChange(page)
    }

    renderPages = () => {
        const { current: currentPage, total, pageSize } = this.props
        const totalPage = Math.ceil(total / pageSize)

        const prev = (
            <div
                key="prev"
                className={cn(
                    styles.paginationPrev,
                    currentPage === 1 && styles.disabled
                )}
                onClick={() => this.handlePrev(currentPage)}>
                <LeftOutlined />
            </div>
        )

        const next = (
            <div
                key="next"
                className={cn(
                    styles.paginationNext,
                    currentPage === totalPage && styles.disabled
                )}
                onClick={() => this.handleNext(currentPage, totalPage)}>
                <RightOutlined />
            </div>
        )

        let result = []
        const { groupCount } = this.state
        // 如果总页数小于10，全部显示
        if (totalPage <= SHOW_ALL_PAGE_COUNT) {
            result = this.createPages([
                prev,
                this.createAllPageItems(1, totalPage),
                next,
            ])
            return result
        }
        const firstPage = this.createPageItem(1)
        const lastPage = this.createPageItem(totalPage)
        const jumpPrev = this.createPageItem('jumpPrev')
        const jumpNext = this.createPageItem('jumpNext')
        const PAGE_RIGHT_INDEX = totalPage - groupCount + 1
        // 当前页数比分组页数大时，显示左边省略号
        if (currentPage >= PAGE_RIGHT_INDEX) {
            result = this.createPages([
                jumpPrev,
                this.createAllPageItems(
                    PAGE_RIGHT_INDEX - PAGE_SCALE,
                    totalPage
                ),
            ])
        } else if (currentPage <= groupCount) {
            // 当前页数比分组页数小时，显示右边省略号
            result = this.createPages([
                this.createAllPageItems(2, groupCount + PAGE_SCALE),
                jumpNext,
            ])
        } else {
            result = this.createPages([
                jumpPrev,
                this.createAllPageItems(
                    currentPage - PAGE_SCALE,
                    currentPage + PAGE_SCALE
                ),
                jumpNext,
            ])
        }
        return [prev, firstPage, ...result, lastPage, next]
    }

    createPages = (items) => {
        let result = []
        items.forEach((item) => {
            const temp = Array.isArray(item) ? item : [item]
            result = [...result, ...temp]
        })
        return result
    }

    createAllPageItems = (start, end) => {
        const pages = []
        for (let i = start; i < end; i++) {
            const item = this.createPageItem(i)
            pages.push(item)
        }
        return pages
    }

    createPageItem = (page) => {
        const { currentPage } = this.state
        const isNumber = typeof page === 'number'
        return (
            <div
                key={page}
                title={page}
                className={cn(
                    styles.paginationItem,
                    currentPage === page && styles.active,
                    !isNumber && styles.jump
                )}
                onClick={() => this.handleClickItem(page)}>
                {isNumber ? page : '...'}
            </div>
        )
    }

    render() {
        const { total } = this.props
        // const { totalPage } = this.state
        if (total <= 0) return null
        return (
            <div className={styles.pagination}>
                {/* <div
                    className={cn(
                        styles.paginationPrev,
                        current === 1 && styles.disabled
                    )}
                    onClick={this.handlePrev}>
                    <LeftOutlined />
                </div> */}
                {this.renderPages()}
                {/* <div
                    className={cn(
                        styles.paginationNext,
                        current === totalPage && styles.disabled
                    )}
                    onClick={this.handleNext}>
                    <RightOutlined />
                </div> */}
            </div>
        )
    }
}

export default Pagination
