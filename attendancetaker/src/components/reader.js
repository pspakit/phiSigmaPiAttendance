export default function reader({credits, creditSearch, chapterSearch, setReaderName, setCreditSearch, setDateSearch, handleLogout}) {

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

            <h2>Search by Chapter Date</h2>
            <input required type="text" placeholder="Chapter Date?" onChange={(e) => setDateSearch(e.target.value)}/>
            <p><em>Date must be formatted as MM/DD/YYYY</em></p>
            <button onClick={chapterSearch} type="button">Chapter Date Search</button>


            
            <button onClick={handleLogout} type="button">Logout</button>
        </form>

    )

}
