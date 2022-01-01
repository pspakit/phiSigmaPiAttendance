
import Button from './LogButton'


export default function LogForm({title, setEmail, setPassword, setName, handleAction}) {
  
  return (
    <div className="Login">
      <h1>{title}</h1>
      <form>
        {title === "Register" && 
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        }
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <Button title={title} handleAction={handleAction} />
      </form>
    </div>
  );
}