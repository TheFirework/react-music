import React from 'react';
import PropTypes from 'prop-types'

class SvgIcon extends React.Component {
    static defaultProps = {
        iconSize: '1em',
        svgClass: 'svg-icon',
        color:'currentColor'
    }
    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        style: PropTypes.object
    }
    get iconSize() {
        let size = this.props.size
        let type = typeof size || 'middle'

        if ('string' === type) {
            if ('small' === size) {
                return '2em'
            } else if ('middle' === size) {
                return '2.67em'
            } else {
                return '3.33em'
            }
        } else if ('number' === type) {
            return size + 'em'
        } else {
            return '1em'
        }
    }

    get iconName() {
        return `#${this.props.icon}`
    }

    render() {
        const { svgClass, className, style } = this.props
        return (
            <svg className={`${svgClass} ${className}`}
                style={{ 'fill': this.props.color, 'width': this.iconSize, 'height': this.iconSize, ...style }}
                aria-hidden="true">
                <use xlinkHref={this.iconName}></use>
            </svg>
        )
    }
}

export default SvgIcon;