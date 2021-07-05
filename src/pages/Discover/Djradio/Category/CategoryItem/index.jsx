import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.less'
class CategoryItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
    }
    render() {
        const { id, name, imageUrl, onClick } = this.props
        return (
            <div className={styles.wrapper} onClick={() => onClick(id)}>
                <div className={styles.icon}>
                    <img src={imageUrl} alt={id} />
                </div>
                <div className={styles.name}>{name}</div>
            </div>
        )
    }
}

export default CategoryItem
