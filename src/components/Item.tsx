
export function Item({
    id, text, handleRemove}:
    {id: string, text: string, handleRemove: () => void
}) {
    
    return (
        <li key={id}>
        <span>{text}</span>
        <button onClick={handleRemove}>Eliminar</button>     
      </li>
    )
}