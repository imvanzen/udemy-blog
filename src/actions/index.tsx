import { Action } from "redux"

export const loadPosts = (): Action => {
    return {
        type: 'LOAD_POSTS'
    }
}