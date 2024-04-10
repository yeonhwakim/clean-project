import { itemModel } from '../../entities/item';

// 상태 변경
const toggleItem = (itemId: string) => {
  itemModel.updateItemCheckState(itemId);
}


export const events = { toggleItem };