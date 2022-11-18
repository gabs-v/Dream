import React,{useState, useEffect} from 'react'
import axios from 'axios'

const New = (props) => {
    const [subjectLine, setSubjectLine] = useState('');
    const [description,setDescription] = useState('');

    useEffect(() => {
        axios.post("http://localhost:8000/api/dreams")
        .then((res) => {
            console.log(res)
            res.json(res)
        })
        .catch((err) => console.log(err))
        })


    return (
        <div>
            <div className='navBar'>
                <h1>Dazed and Dreamin'</h1>
                <ul>
                    <li> All Dreams </li>
                    <li> New Entry </li>
                </ul>
            </div>
            <form>
                <div className='formSubject'>
                    <label>Subject Line:</label>
                    <input type='text' />
                </div>
                <div className='formSubject'>
                    <label>Description:</label>
                    <textarea cols='20' rows='5' />
                </div>
            </form>
        </div>
    )
}

export default New