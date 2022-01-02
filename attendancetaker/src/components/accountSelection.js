// import tools
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccountSelection() {

    const navigate = useNavigate();
    return (
        <div className="accountSelection">
            <h1>Phi Sig Attendance</h1>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>

        </div>
    );
}