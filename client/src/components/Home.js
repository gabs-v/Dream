import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../static/css/Home.css'

const Home = (props) => {
    const {theDreams, setTheDreams} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/dreams")
        .then((res) => {
            console.log(res.data)
            setTheDreams(res.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div>
            <div className='navBar'>
                <h1>Dazed and Dreamin'</h1>
                <ul>
                    <li> All Dreams </li>
                    <li> New Entry </li>
                    <li> Favorite Dreams </li>
                </ul>
            </div>
            <div className='allEntries'>
                
            </div>
        </div>
    )
}

export default Home