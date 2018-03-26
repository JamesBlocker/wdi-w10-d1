import React from 'react'
import './SinglePost.css'

const SinglePost = (props) => {
    console.log(props)
    const post = props.post
    return (
        <div className="SinglePost">
                <img src={post.imgURL} alt="amazingness" />
                <div className="textyStuff">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
        </div>
    )
}

export default SinglePost