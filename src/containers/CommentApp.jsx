import React from 'react'
import CommentInputContainer from './CommentInputContainer'
import CommentListContainer from './CommentListContainer'
import './CommentApp.css'

export default class CommentApp extends React.PureComponent {
    render() {
        return (
            <div className='wrapper'>
                <CommentInputContainer />
                <CommentListContainer />
            </div>
        )
    }
}
