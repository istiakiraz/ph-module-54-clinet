
import './App.css'
import User from './components/User';

const userPromise = fetch('http://localhost:3000/users').then(res=> res.json());

function App() {

  
 

  return (
    <>
      
      <h1>User Management Application</h1>
      <User userPromise={userPromise} ></User>
        
    </>
  )
}

export default App
