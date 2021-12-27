
import Button from './LogButton'


export default function LogForm({title, setEmail, setPassword, handleAction}) {

  return (
    <div className="Login">
      <h1>{title}</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <Button title={title} handleAction={handleAction} />
      </form>
    </div>
  );
}