import React from 'react';
import Navbar from './Navbar.js'
import PostsConatiner from './PostsContainer.js'
import puppyImage from './puppy.jpg'
import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <img src={'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/All-about-puppies--Cesar%E2%80%99s-tips%2C-tricks-and-advice.jpg?itok=bi9xUvwe'} alt="Puppy" />
            <PostsConatiner />
        </div>
    )
}

export default App