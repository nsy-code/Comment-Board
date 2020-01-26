import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

class Comment extends Component {
    constructor() {
        super()
        this.state = { timeString: '' }
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }

    componentWillMount() {
        this._updateTimeString()

        // To update the time every 5 seconds
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} mins ago`
                : `${Math.round(Math.max(duration, 1))} seconds ago`
        })
    }

    _getProcessedContent(content) {
        return content
            // To Change the HTML Tag before convert it into code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")

            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }} />
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span
                    onClick={this.handleDeleteComment}
                    className='comment-delete'>
                    Delete
                </span>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
}

export default Comment