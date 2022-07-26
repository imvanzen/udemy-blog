import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux';
import { Action } from 'redux';
import { loadPosts } from '../actions';

interface Props {
    posts: Array<Object>,
    loadPosts: () => Action
}

const PostList = (props: Props): ReactElement => {
    const { posts, loadPosts } = props;

    useEffect(() => {
        console.log("Component Load");

        loadPosts()
    }, [loadPosts])

    return (
        <div className='post-list'>
            <pre><code>{JSON.stringify(posts, null, 2)}</code></pre>
            <button onClick={() => loadPosts()}>More</button>
        </div>
    )
}

const mapState = (state: any) => {
    return {
        posts: state.posts
    }
}

const connector = connect(mapState, {
    loadPosts
})

export default connector(PostList)