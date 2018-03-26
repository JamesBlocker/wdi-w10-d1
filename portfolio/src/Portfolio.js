import React from 'react'
import SinglePost from './SinglePost.js'

const portfolioData = [
    {id: 123, title: "One", body: "Well isn't that cool", imgURL: "http://purrfectcatbreeds.com/wp-content/uploads/2014/05/americancurl6.jpg"},
    {id: 456, title: "Two", body: "Well isn't that cool", imgURL: "http://purrfectcatbreeds.com/wp-content/uploads/2014/05/americancurl6.jpg"},
    {id: 789, title: "Three", body: "Well isn't that cool", imgURL: "http://purrfectcatbreeds.com/wp-content/uploads/2014/05/americancurl6.jpg"}
]

const Portfolio = () => {
    return (
        <div className="Portfolio">
            { portfolioData.map((portfolioObj) => {
                return <SinglePost post={portfolioObj} key={portfolioObj.id} />
            }) }
        </div>
    )
}

export default Portfolio