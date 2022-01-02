import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddEvent from './addEvent'

export default function Home({setEvent, setCredit,addEventHandler,name }) {
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
            <div className="landingTitle">       
                <h1>Add Event, {name}</h1>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <AddEvent setEvent={setEvent} setCredit={setCredit} addEventHandler={()=> addEventHandler()}/>
        </div>
    )
}