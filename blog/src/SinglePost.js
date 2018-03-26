import React from 'react'

const SinglePost = (props) => {
    console.log(props)
    const post = props.post
    return (
        <div className="SinglePost">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <small>{"ID: " + post._id}</small>
        </div>
    )
}

export default SinglePost