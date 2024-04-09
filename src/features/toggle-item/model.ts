import { itemModel } from '../../entities/item';

// 상태 변경
const toggleItem = (itemId: string) => {
  const item = itemModel.useItem(itemId);

  if (!item) {
    return;
  }

  itemModel.updateItem({
    ...item,
    isChecked: !item.isChecked,
  });
}

export const events = { toggleItem };