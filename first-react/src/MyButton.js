import React from 'react'

const MyButton = (props) => {
    console.log(props)
    return <button>{props.label}</button>    
}

export default MyButton