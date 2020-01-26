import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import rootReducer from './reducers/combineReducers'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root'));

