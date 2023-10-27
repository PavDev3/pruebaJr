import './App.css'
import { useEffect, useState } from 'react'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`,
  timestamp: number,
  text: string,
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 1',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 2',
  }
]
function App() {

  const [items, setItems] = useState(INITIAL_ITEMS)
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const text = formData.get('item') as string
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text,
    }
    setItems([...items, newItem])
    form.reset()
  }

  const handleRemove = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleReset = () => {
    setItems([])
  }

  useEffect(() => {
    setIsButtonVisible(items.length > 0)
  }, [items])


  return (
  <main>
    <header>
      <h1>Prueba técnica Jr</h1>
    </header>
    <aside>
      <h4>Añadir elementos a la lista</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Elemento a introducir:
          <input 
          name="item"
          required
          type='text'
          placeholder='Escribe aquí'
           />
        </label>
        <button type='submit'>Añadir</button> 
      </form>
    </aside>
    <section>
      <h4>Lista de elementos:</h4>
      {
        items.length === 0 ? <p>No hay elementos</p> :

        <ul>
       {
        items.map((item)  => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>     
            </li>
          )}
          )
      }
      </ul>
        }
       {isButtonVisible && <button onClick={handleReset}>Eliminar todos</button>}
       
    </section>
  </main>
 )
}

export default App
