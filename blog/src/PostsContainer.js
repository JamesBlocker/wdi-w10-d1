import React from 'react'
import SinglePost from './SinglePost.js'


const postData = [
    {title: "Hello World", body: "my first post", _id: 123 },
    {title: "Oh snap!", body: "my second post", _id: 456 },
    {title: "Goodbye World", body: "my third post", _id: 789 }
]


const PostsContainer = () => {
    return (
        <div className="PostsContainer">
            { postData.map((postObj) => {
                return <SinglePost post={postObj} key={postObj._id}/>
            }) }           
        </div>
    )
}

export default PostsContainer