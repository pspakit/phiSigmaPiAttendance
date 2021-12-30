import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import AddEvent from './addEvent'

export default function Home({setEvent, setCredit, setDate,addEventHandler}) {
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/needAccount')
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/needAccount')
        }
    }, [])
    return (
        <div>
            Home Page
            <button onClick={handleLogout}>Log out</button>

            Add Event 
            <AddEvent setEvent={setEvent} setCredit={setCredit} addEventHandler={()=> addEventHandler()}/>
        </div>
    )
}