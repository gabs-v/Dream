import React,{useState} from 'react'
import axios from 'axios'

const New = (props) => {
    const [subjectLine, setSubjectLine] = useState('');
    const [description,setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/dreams", {
            subjectLine,
            description
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            
            setDescription('');
            setSubjectLine('');
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className='navBar'>
                <h1>Dreamin'</h1>
                <ul>
                    <li> All Dreams </li>
                    <li> New Entry </li>
                </ul>
            </div>
            <form onSubmit={submitHandler}>
                <div className='formSubject'>
                    <label>Subject Line:</label>
                    <input type='text' onChange={ (e) => setSubjectLine(e.target.value)} />
                </div>
                <div className='formSubject'>
                    <label>Description:</label>
                    <textarea cols='20' rows='5' onChange={ (e) =>setDescription(e.target.value)} />
                </div>
                <input type='submit' value='Create New Entry' />
            </form>
        </div>
    )
}

export default New