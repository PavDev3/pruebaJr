import './App.css'

function App() {
 return (
  <main>
      <h1>Prueba técnica Jr</h1>
    <aside>
      <h4>Añadir y eliminar elementos de la lista</h4>
      <form>
        <label>
          Elemento a introducir
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
      <h3>Lista de elementos</h3>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </section>
  </main>
 )
}

export default App
