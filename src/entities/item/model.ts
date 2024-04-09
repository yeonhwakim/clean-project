import { Item } from '../../shared/typing';

const items = [
  {
    id: '1',
    name: '욕실 청소',
    isChecked: false,
  },
  {
    id: '2',
    name: '방 청소',
    isChecked: false,
  }
]

export const useItem = (itemId: string) => {
  return items.find(item => item.id === itemId);
}

export const updateItem = (item: Item) => {
  const index = items.findIndex(i => i.id === item.id);
  items[index] = item;
}
