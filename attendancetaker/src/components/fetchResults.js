export default function results({goBack, data, nameSearch, dateSearch}) {
    return (
       <div className="results">
               {nameSearch != "" && <h1>Results for '{nameSearch}'</h1>}
               {dateSearch != "" && <h1>Results for '{dateSearch}'</h1> }
                
           <button onClick={goBack}>New Search</button>
           {/* user's name */}
           {data.map((current) => {
               return <div >
                   <h2 key={current["name"]}>{current["name"]}</h2>
                    <div key={current["name"] + "newKey"} className="eventContainer">
                   {/* all the event boxes for the user */}
                   {current["events"].map((event, index) => {
                       return <div className="eventBox" key={event["uid"] + index}>
                                <h3>Event #{index}</h3>
                                <p>Credit: {event["credit"]}</p>
                                <p>Event Description: {event["event"]}</p>
                                <p>Date: {event["date"]}</p>
                            </div>
                   })}
                    </div>
               </div>
           })}

       </div>

    )

}
