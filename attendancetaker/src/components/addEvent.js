
export default function addEvent({setEvent, setCredit, addEventHandler}) {

  const credits = ["", "Chapter", "Scholarship", "Fellowship", "Service"]
  return (
    <div className="Login">
      <h1>Add Event</h1>
      <form>
        <select id="credit" onChange={(e) => setCredit(e.target.value)}>
          {credits.map((item)=> {
            return <option value={item}>{item}</option>
          })}
        </select>
        <input required type="text" placeholder="What is the Event?" onChange={(e) => setEvent(e.target.value)}/>
        <button type="button" onClick={addEventHandler} >Enter</button>
      </form>
    </div>
  );
}