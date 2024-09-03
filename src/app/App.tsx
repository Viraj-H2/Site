import { useState } from 'react'
import virajH2Logo from '/favicon.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={virajH2Logo} className="logo" alt="Viraj H2 logo" />
      <h1>Viraj H2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count === 0 ? 'Send love' : `${count} ❤️`}
        </button>
      </div>
    </>
  )
}
