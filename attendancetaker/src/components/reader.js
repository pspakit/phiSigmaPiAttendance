export default function reader({credits, events, creditSearch, chapterSearch, eventSearch, setReaderName, setCreditSearch, setDateSearch, setEventSearch, handleLogout}) {

    return (
        <form>
            <h2>Search by Name and Credit</h2>
            <input required type="text" placeholder="Who?" onChange={(e) => setReaderName(e.target.value)}/>
            <p><em>Leave the name blank to search the entire the chapter.</em></p>
            <select id="credit" onChange={(e) => setCreditSearch(e.target.value)} placeholder="Credit">
            {credits.map((item)=> {
              return <option key={item} value={item}>{item}</option>
            })}
            </select>
            <button onClick={creditSearch} type="button">Credit-based Search</button>


            {/* <h2>Search by Event</h2>
            <select id="event" onChange={(e) => {const selectedEventName = e.target.value;}} placeholder="Event">
                <option value="">Select an event</option>
                {events.map((event) => (
                <option key={event.eventName} value={event.eventName}> {event.eventName} - {event.eventDate}</option>
            ))}
            </select>
            <button onClick={eventSearch} type="button">Event-based Search</button>  */}


            <h2>Search by Chapter Date</h2>
            <input required type="text" placeholder="Chapter Date?" onChange={(e) => setDateSearch(e.target.value)}/>
            {/* <input required type="date" placeholder="Select a date" onChange={(e) => setSelectedDate(e.target.value)}/> */}
            <p><em>Date must be formatted as MM/DD/YYYY</em></p>
            <button onClick={chapterSearch} type="button">Chapter Date Search</button>

            
            <button onClick={handleLogout} type="button">Logout</button>
        </form>

    )

}
