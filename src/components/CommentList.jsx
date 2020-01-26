import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
import './CommentList.css'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    constructor() {
        super()
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <div >
                {
                    this.props.comments.map(
                        (comment, i) =>
                            < Comment
                                comment={comment}
                                key={i}
                                index={i}
                                onDeleteComment={this.handleDeleteComment}
                            />
                    )}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
}

export default CommentList