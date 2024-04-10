import { Item } from '../../shared/typing';

const items: Item[] = [
  {
    id: '1',
    checklist_id: '1',
    title: '욕실 청소',
    isChecked: false,
  },
  {
    id: '2',
    checklist_id: '1',
    title: '방 청소',
    isChecked: false,
  }
]

export const useItem = (itemId: string) => {
  return items.find(item => item.id === itemId);
}

export const updateItemCheckState = (itemId: string) => {
  const item = items.find(i => i.id === itemId);
  
  if (!item) {
    throw new Error('item not found');
  }

  item.isChecked = !item.isChecked;
}

// export const updateItem = (item: Item) => {
//   const index = items.findIndex(i => i.id === item.id);
//   items[index] = item;
// }
