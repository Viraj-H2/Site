import { useState } from 'react'
import logo from '/logo.svg'
import { Button } from 'react-bootstrap'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} />
      <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
        {count === 0 ? 'Send love' : `${count} ❤️`}
      </Button>
    </>
  )
}
