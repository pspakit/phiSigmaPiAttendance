import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
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
        </div>
    )
}