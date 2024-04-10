// import { Checkbox } from 'shared/ui';
import { checklistModel } from '../../entities/checklist';
import * as toggleItemModel from './model';

type ToggleItemProps = {
  itemId: number;
  withStatus?: boolean;
}

export const ToggleTask = ({ itemId }: ToggleItemProps) => {
  const task = checklistModel.useTask(itemId);

  if (!task) {
    return null;
  }
  
  return (
    <>
      {/* <Checkbox /> */}
      <button 
        onClick={() => toggleItemModel.events.toggleTask(itemId)}
        // checked={item.isChecked}
      >
        {task.isChecked ? '완료' : '미완료'}
      </button>
    </>
  )
}