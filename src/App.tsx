import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <h1>h1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicking button {count}
        </button>
      </div>
    </>
  )
}

export default App
