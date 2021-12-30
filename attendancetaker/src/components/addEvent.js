
export default function addEvent({setEvent, setCredit, setDate, addEventHandler}) {


  return (
    <div className="Login">
      <h1>Add Event</h1>
      <form>
        <input required type="text" placeholder="What is the Event?" onChange={(e) => setEvent(e.target.value)}/>
        <input required type="text" placeholder="What is the Credit?" onChange={(e) => setCredit(e.target.value)}/>

        <button type="button" onClick={addEventHandler} >Enter</button>
      </form>
    </div>
  );
}