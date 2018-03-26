import React from 'react'
import MyButton from './MyButton.js'

const App = () => {
    return (
        <div>
            <h1>My first react app</h1>
            <MyButton label="Submit"/>
            <MyButton label="or"/>
            <MyButton label="Die"/>            
        </div>
    )
}

export default App
//same as module.exports = App equivalent