export default function LogForm({title, setEmail, setPassword, setConfirmPassword, setName, handleAction}) {
  
  return (
    <div className="logForm">
      <h1>{title}</h1>
      <form>
        {title === "Register" && 
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        }
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        {title === "Register" && 
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
        }
        <button type="button" onClick={handleAction}>{title}</button>
      </form>
    </div>
  );
}