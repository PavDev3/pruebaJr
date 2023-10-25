
export interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number;
  text: string;
}

export const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 1',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 2',
  },
];
