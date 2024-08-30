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
            
            <br></br>
            <h2>Absent?</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_7KowF93kMQzNaV36cXXNOAt5TGSHH-NjxndHvfqO4axHFQ/viewform"><button>Excuse Form</button></a>

        </div>
    );
}