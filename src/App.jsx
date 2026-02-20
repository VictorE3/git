import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h1>Olá, React!</h1>
      <p>Projeto simples com Vite + React.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Contador: {count}
      </button>
    </div>
  )
}

export default App
