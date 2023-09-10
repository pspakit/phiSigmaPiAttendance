import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddEvent from './addEvent'

export default function Home({credits, events, setEvent, setCredit,addEventHandler,name, handleLogout, handleSearch}) {
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/needAccount')
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Had to add this line ^ as there was an issue with using navigate in useEffect

    return (
        <div className='landing'>
            <div className="landingTitle">       
                <h1>Add Event, {name}</h1>
            </div>
            <AddEvent credits={credits} events={events} setEvent={setEvent} setCredit={setCredit} addEventHandler={()=> addEventHandler()}/>
            <div className='footerLanding'>
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}