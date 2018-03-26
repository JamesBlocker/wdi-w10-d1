import React from 'react'
import './Title.css'

const titleInfo = "My Portfolio"

const Title = () => {
    return (
        <div className="Title">
            <h1>{ titleInfo }</h1>
        </div>
    )
}

export default Title