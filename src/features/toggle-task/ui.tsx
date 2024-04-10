// import { Checkbox } from 'shared/ui';
import { taskModel } from '../../entities/task';
import * as toggleItemModel from './model';

type ToggleItemProps = {
  itemId: string;
  withStatus?: boolean;
}

export const ToggleTask = ({ itemId }: ToggleItemProps) => {
  const task = taskModel.useTask(itemId);

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