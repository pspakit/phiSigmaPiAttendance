export default function reader({credits, fetchData, setReaderName, setCreditSearch}) {

    return (
        <form>
            <input required type="text" placeholder="Who?" onChange={(e) => setReaderName(e.target.value)}/>
           
            <select id="credit" onChange={(e) => setCreditSearch(e.target.value)} placeholder="Credit">
            {credits.map((item)=> {
              return <option key={item} value={item}>{item}</option>
            })}
            </select>
            <button onClick={fetchData} type="button">fetch data</button>
        </form>

    )

}
