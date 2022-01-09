export default function Finshed({name, handleLogout}) {

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