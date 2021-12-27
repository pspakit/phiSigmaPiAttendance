// import tools
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    return (
        <div>
            <h1>Attendance Taker!</h1>
            <button onClick={() => navigate('/login')}>Login in here</button>
            <button onClick={() => navigate('/register')}>Register in here</button>

        </div>
    );
}