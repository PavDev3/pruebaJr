import { useState } from 'react';

export function useRemove() {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return { items, removeItem };
}
