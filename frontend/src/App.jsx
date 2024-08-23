import { useState } from 'react'
import Login from './pages/login/Login'
import './App.css'
import Signup from './pages/signup/Signup.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Signup/>
    </div>
  )
}

export default App
