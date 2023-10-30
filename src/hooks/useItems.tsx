import { useState } from "react"
import { Item } from "../components/itemsData"



export const useItems = () => {
  // 2. Creamos un estado para la lista de elementos
  const [items, setItems] = useState<Item[]>([])


  const addItem = (text: string) => {
      const newItem: Item = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text,
      }

      setItems((prevItems) => {
        return [...prevItems, newItem]
      })
    }

    const removeItem = (id: string) => {
      setItems((prevItems) => {
        return prevItems.filter((item) => item.id !== id)
      })
    }

    return {
      items,
      addItem,
      removeItem,
    }
}





