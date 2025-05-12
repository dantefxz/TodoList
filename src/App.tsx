import { useState } from 'react'
import Header from "./components/Header"
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

// Colores:
// Rojo: #f44336 oscurito, #d32f2f brillante
// Fondo: negro/gris oscuro
// Texto: blanco/gris oscuro
// Botones y títulos: rojo (hover o no)
// Detalles: en blanco