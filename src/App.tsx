import './App.css'
import { useEffect, useState } from 'react'


// 1. Crear una lista de elementos
interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`,
  timestamp: number,
  text: string,
}
// 2. Añadir elementos a la lista de ejemplos
// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Elemento 1',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Elemento 2',
//   }
// ]
function App() {

  // 3. Creamos un estado para la lista de elementos
  const [items, setItems] = useState<Item[]>([])
  // Creamos un estado para el botón de eliminar todos para que no se muestre si no hay elementos
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  // 4. Creamos un manejador de eventos para añadir elementos a la lista
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

  // 5. Creamos un handle para eliminar 1 elemento de la lista
  const handleRemove = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  // 6. Creamos otro handle para eliminar todos los elementos de la lista
  const handleReset = () => {
    setItems([])
  }

  // 7. Creamos un efecto para que el botón de eliminar todos no se muestre si no hay elementos
  useEffect(() => {
    setIsButtonVisible(items.length > 0)
  }, [items])


  // Aquí ya mostramos la lista de elementos a la derecha y el formulario a la izquierda
  // Tenemos un botón submit para añadir elementos a la lista
  // También tenemos una section donde mostramos la lista de elementos siempre que haya alguno, si no, mostramos un mensaje
  // Si la lista de elementos esta vacía, no mostramos el botón de eliminar todos
  return (
  <main>
    <header>
      <h1>Prueba técnica Jr</h1>
    </header>
    <aside>
      <h4>Añadir elementos a la lista</h4>
      <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
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
