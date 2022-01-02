import { useNavigate } from 'react-router-dom'

export default function Finshed({name }) {
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/needAccount')
    }

    return (
        <div>
            <div className="finished">       
                <h1>Thanks, {name}</h1>
                <h3>Enjoy the event!</h3>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}