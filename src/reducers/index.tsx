import { Action, combineReducers } from 'redux'
import { Post } from '../types'

const loadPostsReducer = (posts: Array<Post> = [], action: Action): Array<Post> => {
    if (action.type === 'LOAD_POSTS') {
        const test = {
            userId: 1,
            id: 1,
            title: 'ABC',
            body: 'ABC'
        }
        return [...posts, test]
    }

    return posts
}

export default combineReducers({
    posts: loadPostsReducer
})