import { useState } from 'react';

export function useReset() {
  const [items, setItems] = useState([]);

  const resetItems = () => {
    setItems([]);
  };

  return { items, resetItems };
}
