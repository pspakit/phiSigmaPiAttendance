
export default function addEvent({setEvent, setCredit, addEventHandler}) {

  const credits = ["", "Chapter", "Scholarship", "Service"]
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
        <input required type="text" placeholder="What is the Event?" onChange={(e) => setEvent(e.target.value)}/>
        <button type="button" onClick={addEventHandler} >Enter</button>
      </form>
    </div>
  );
}