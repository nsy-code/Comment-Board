import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment, selector } from '../reducers/ducks/comments'

class CommentInputContainer extends React.PureComponent {
    constructor() {
        super()
        this.state = { username: '' }
    }

    componentWillMount() {
        this._loadUsername()
    }

    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    handleSubmitComment(comment) {

        if (!comment) return
        if (!comment.username) return alert('Please Input User Name')
        if (!comment.content) return alert('Please Input Comment')

        
        const { comments } = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }

    render() {
        return (
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUsername.bind(this)}
                onSubmit={this.handleSubmitComment.bind(this)} />
        )
    }
}

CommentInputContainer.propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    selector,
    mapDispatchToProps
)(CommentInputContainer)