// import tools
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccountSelection() {

    const navigate = useNavigate();
    return (
        <div className="accountSelection">
            <h1>Attendance Taker!</h1>
            <button onClick={() => navigate('/login')}>Login in here</button>
            <button onClick={() => navigate('/register')}>Register in here</button>

        </div>
    );
}