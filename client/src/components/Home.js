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
                </ul>
            </div>
            <div className='allEntries'>
                {
                    theDreams.map((dream,index) => {
                        return <p key={index}>{dream.subjectLine}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Home