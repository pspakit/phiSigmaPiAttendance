
export default function addEvent({events, credits, setEvent, setCredit, addEventHandler}) {

  return (
    <div className="Login">
      <form>
        <div className="creditSelect">
          <h3>Credit:</h3>
          <select id="credit" onChange={(e) => setCredit(e.target.value)} placeholder="Credit">
            {credits.map((item)=> {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>


        <select id="event" onChange={(e) => {
          const selectedEventName = e.target.value;
          const selectedEvent = events.find((event) => event.eventName === selectedEventName);
     
          if (selectedEvent) {
            setEvent(selectedEvent.eventName);
            // setSelectedDate(selectedEvent.eventDate);
          } else {
            // Handle the case where the selected event is not found
          }
        }}
          placeholder="Event">
          <option value="">Select an event</option>
            {events.map((event) => (
            <option key={event.eventName} value={event.eventName}> {event.eventName} - {event.eventDate}</option>
          ))}
        </select>
        
    {/* <input required type="text" placeholder="What is the Event?" onChange={(e) => setEvent(e.target.value)}/> */}
        {/* <select id="event" onChange={(e) => {
          console.log(e)
          setEvent(e.target.value)}} placeholder="Event">
            {events.map((i, eventName, eventDate)=> {
              return <option key={i} value={eventName}>{eventName} - {eventDate}</option>
            })}
          </select>
          <input required type="date" placeholder="Select a date" onChange={(e) => setSelectedDate(e.target.value)}/> */}
        <button type="button" onClick={addEventHandler} >Enter</button>
      </form>

    </div>
  );
}