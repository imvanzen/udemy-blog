import { Action, combineReducers } from 'redux'

const loadPostsReducer = (posts: Array<Object> = [], action: Action): Array<Object> => {
    if (action.type === 'LOAD_POSTS') {
        return [...posts, []]
    }

    return posts
}

export default combineReducers({
    posts: loadPostsReducer
})