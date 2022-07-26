import React, { ReactElement } from 'react'
import PostList from './PostList'

const App = (): ReactElement => {
    return (
        <div className='app ui container'>
            <PostList />
        </div>
    )
}

export default App