// import { Checkbox } from 'shared/ui';
import { itemModel } from '../../entities/item';
import * as toggleItemModel from './model';

type ToggleItemProps = {
  itemId: string;
  withStatus?: boolean;
}

export const ToggleItem = ({ itemId, withStatus = true }: ToggleItemProps) => {
  const item = itemModel.useItem(itemId);

  if (!item) {
    return null;
  }
  
  return (
    <>
      {/* <Checkbox /> */}
      <button 
        onClick={() => toggleItemModel.events.toggleItem(itemId)}
        // checked={item.isChecked}
      >
        {withStatus && item.isChecked ? '완료' : '미완료'}
      </button>
    </>
  )
}