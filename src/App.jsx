import { useState } from 'react'
import './App.css'

const itensMain = ['React', 'Vite', 'Git', 'main', 'branch']

function App() {
  const [count, setCount] = useState(0)
  const [itens, setItens] = useState(itensMain)

  const removerItem = (index) => {
    setItens((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="card">
      <h1>Olá, React!</h1>
      <p>Projeto simples com Vite + React. (branch main)</p>
      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button type="button" onClick={() => removerItem(index)} aria-label={`Remover ${item}`}>
              ×
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((c) => c + 1)}>
        Contador: {count}
      </button>
    </div>
  )
}

export default App
